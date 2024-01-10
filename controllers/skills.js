
import { skills } from '../data/skill-data.js'

function index(req, res) {
  res.render('skills/index', {
    skills: skills
  })
}

export {
  index,
}

