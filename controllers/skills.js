
import { skills } from '../data/skill-data.js'

function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
}

export {
  index,
}

