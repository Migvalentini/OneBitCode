/*
OMIT:

=> Generic type present in Typescript that help us to create new types from existing types omitting some specific properties

PICK:

=> Pick specific properties from a existing type
*/
let repo;
let localUser;
let localRepository;
localUser.id;
localUser.login;
localUser.name;
localUser.bio;
//localUser.url = ERROR
localRepository.name;
localRepository.description;
localRepository.fork;
localRepository.stargazers_count;
//localRepository.url = ERROR
