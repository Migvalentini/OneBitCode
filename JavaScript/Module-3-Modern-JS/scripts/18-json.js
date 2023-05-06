/*
JSON:

=> JSON or JavaScript Object Notation is a file format used for data exchange
=> It is an compact format and works using the key-value system
=> Similar to Javascript objects, with simple differences
    - " " to name kays
    - Supported types: string, number, boolean and null
    - {} to define properties groups (objects)
    - [] to define data lists (arrays)
    - , to separate the properties
=> It is widely used dor data exchange between different systems and configuration files in Javascript
=> It is widely used in the web and it is supported from a lot of different languages
=> Example:
{
    "name": "Miguel Valentini",
    "job": "Fullstack Developer",
    "technologies": ["HTML", "CSS", "JS"],
    "working": true,
    "years_of_experience": 7,
    "website": null
}
=> Manipulating json files in JS:
    - JSON.parse() string -> json-compatible object
    - JSON.stringify() json-compatible object -> string 
*/