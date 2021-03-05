const Skill = require('../models/skills');


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
  };

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }
  function newSkill(req, res) {
    res.render('skills/new');
  }
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }
  function show(req, res) {
      res.render('skills/show', {
          Skill: Skill.getOne(req.params.id)
      })
  }
  function create(req, res) {
    Skill.create(req.body);
    res.redirect('skills');
  }

  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }
  function show(req, res) {
      res.render('skills/show', {
          Skill: Skill.getOne(req.params.id)
      })
  }