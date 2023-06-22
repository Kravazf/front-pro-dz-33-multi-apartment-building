// 1. Створити клас Людина.!!!!!
// Властивості:!!!!!
// імʼя;!!!!!
// стать.!!!!!
// Методи:!!!!!
// конструктор, який приймає два параметри: імʼя та стать.!!!!!

// 2. Створити клас Квартира.!!!!!
// Властивості:!!!!!
// конструктор не потрібен;!!!!!
// масив жителів, який при створенні пустий.!!!!!!
// Методи:!!!!!
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.!!!!!

// 3. Створити клас Будинок.!!!!!
// Властивості:!!!!!
// масив квартир, який при створенні пустий;!!!!!
// максимальна кількість квартир.!!!!!
// Методи:!!!!!
// конструктор, який приймає один параметр: максимальну кількість квартир;!!!!!
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.!!!!

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;!!!!!
// декілька екземплярів класу Квартира;!!!!!
// додадити екземпляри класу Людина до екземплярів класу Квартира;!!!!
// екземпляр класу Будинок;!!!!!
// додадити екземпляри класу Квартира до екземплярів класу Будинок.!!!!

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.arrayResidents = [];
  }

  addResident(person) {
    this.arrayResidents.push(person);
  }
}

class House {
  constructor(maxApartments) {
    this.arrayApartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.arrayApartments.length < this.maxApartments) {
      this.arrayApartments.push(apartment);
      console.log('Good');
    } else {
      console.log('Cannot add more apartments. Maximum limit reached.')
    }
  }
}

const person1 = new Person('Vasiliy', 'male');
const person2 = new Person('Natalia', 'female');
const person3 = new Person('Maks', 'male');
const person4 = new Person('Yulia', 'female');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);
apartment4.addResident(person4);

const house = new House(3);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);
house.addApartment(apartment4);

