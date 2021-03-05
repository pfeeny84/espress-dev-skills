const skills = [
    {id: 187187, skill: 'Code While Standing on a Moving Motorcycle', acquired: true},
    {id: 420420, skill: 'Backend Programming', acquired: false},
    {id: 666666, skill: 'Making 95% of a Connect 4 Game', acquired: true}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.acquired = false;
    skills.push(skill);
  }
  function getAll() {
    return skills;
  }
  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  };