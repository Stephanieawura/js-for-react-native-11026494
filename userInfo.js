// Task  Three
function createUserProfiles(names, modifiedNames) {
  const userProfiles = [];
  for (let i = 0; i < names.length; i++) {
    
    const name = names[i];
    const modifiedName = modifiedNames[i];
    const id = i + 1;
    userProfiles.push({ originalName: name, modifiedName: modifiedName, id: id });
  }

  return userProfiles;
}
