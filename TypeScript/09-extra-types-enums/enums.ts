// Don't exists in Js
// Set of constants that we can assign names to and will help us to refer to those names more easily

enum Planets1 {
   MERCURY,
   VENUS,
   EARTH,
   MARS
}

Planets1.EARTH // returns 2

enum Planets2 {
   MERCURY = 1, // start with declared number
   VENUS,
   EARTH,
   MARS
}

Planets2.EARTH // returns 3

enum Planets3 {
   MERCURY = 'Mercury',
   VENUS = 'Venus',
   EARTH = 'Earth',
   MARS = 'Mars'
}

Planets3.EARTH // returns "Earth"

enum Roles {
   ADMIN,
   USER
}

Roles.USER // returns 1