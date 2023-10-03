const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  // let personName = document.querySelector('#person-name').value
  // let personName = form.querySelector('#person-name').value
  // let personName = event.target.querySelector('#person-name').value

  let formElement = event.target
  // let personName = formElement.elements['person-name'].value
  // let personName = formElement['person-name'].value
  let personName = formElement.querySelector('#person-name').value

  let personSurname = formElement.querySelector('#person-surname').value

  let personAge = formElement.querySelector('#person-age').value

  let phone = formElement.querySelector('#phone').value

  let email = formElement.querySelector('#email').value

  console.log(personName)
  console.log(personSurname)
  console.log(personAge)
  console.log(phone)
  console.log(email)

  let infoWrapper = document.createElement('div')
  infoWrapper.innerHTML = `<h2>${personName}</h2>
                            <h2>${personSurname}</h2>
                            <h2>${phone}</h2>
                           <p>${personName} ${personSurname} is ${personAge} years old and phone is ${phone} an email is ${email}....</p>`

  let contentElement = document.querySelector('#content')
  contentElement.append(infoWrapper)
})
