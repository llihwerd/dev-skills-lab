import { Skill } from '../models/skill.js'


function newSkill(req, res) {
  res.render('skills/new')
}


function create(req, res) {
  req.body.proficient = !!req.body.proficient
  Skill.create(req.body)
  .then(skill => {
		// Notice we are doing a redirect here!
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}


function index(req, res) {
  Skill.find({})
  .then(skills => { // skills represents the result of the query, in this case ALL skills
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}


function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}


function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}


export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
}

