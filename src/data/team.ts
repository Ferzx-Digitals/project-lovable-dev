export interface TeamMember {
  name: string;
  role: string;
  org: string;
  image: string;
}

const IMG = 'https://wrc-lake.vercel.app/images/team';

export const teamMembers: TeamMember[] = [
  { name: 'Chris Galliers', role: 'President', org: 'IRF', image: `${IMG}/irf/Chris%20Galliers%20-%20Presidnet.jpg` },
  { name: 'Rohit Singh', role: 'Vice President', org: 'IRF', image: `${IMG}/irf/Rohit%20Singh%20-%20Vice%20president.jpg` },
  { name: 'Andy Davies', role: 'Secretary', org: 'IRF', image: `${IMG}/irf/Andy%20Davies.png` },
  { name: 'Carlien Roodt', role: 'Executive Officer', org: 'IRF', image: `${IMG}/irf/Carlien%20Roodt.jpg` },
  { name: 'Mike Lynch', role: 'Treasurer', org: 'IRF', image: `${IMG}/irf/Mike%20Lynch%20-%20Treasurer.jpg` },
  { name: 'Monica Alvarez', role: 'Federation Development Officer', org: 'IRF', image: `${IMG}/irf/M%C3%B3nica%20%C3%81lvarez%20Malvido.jpg` },
  { name: 'Jonathan Churcher', role: 'General Manager', org: 'IRF', image: `${IMG}/irf/Jonathan%20Churcher.png` },
  { name: 'Antuel Sánchez', role: 'General Secretary', org: 'SIGUNARA', image: `${IMG}/sigunara/Antuel%20S%C3%A1nchez,%20general%20secretary,%20SIGUNARA.jpeg` },
  { name: 'Leonardo Juber', role: 'Member', org: 'SIGUNARA', image: `${IMG}/sigunara/Leo%20Juber.jpeg` },
  { name: 'Sofia Nazar', role: 'Member', org: 'SIGUNARA', image: `${IMG}/sigunara/Sofia%20Nazar%20-%20Sigunara.jpeg` },
  { name: 'Federico Rodríguez Mira', role: 'Member', org: 'SIGUNARA', image: `${IMG}/sigunara/Federico%20Rodr%C3%ADguez%20Mira,%20SIGUNARA.jpeg` },
  { name: 'Oscar Carvajal Mora', role: 'President FLG', org: 'FLG', image: `${IMG}/sigunara/%C3%93scar%20Carvajal%20Mora,%20FLG%20president.jpeg` },
  { name: 'Laura Pastorino Ladereche', role: 'Vice President FLG', org: 'FLG', image: `${IMG}/sigunara/Laura%20P%20FLG.jpeg` },
  { name: 'Andrea Juncos', role: 'Executive Director', org: 'Plan A', image: `${IMG}/plana/Andrea%20Juncos%20-%20Executive%20Director.jpg` },
  { name: 'Ana Lacuadra', role: 'Project Manager', org: 'Plan A', image: `${IMG}/plana/2%20-%20Ana%20Lacuadra.%20Project%20Manager.jpg` },
  { name: 'Malvina Solis', role: 'Local Coordinator', org: 'Plan A', image: `${IMG}/plana/Malvina%20Solis%20-%20Local%20coordinator.jpg` },
  { name: 'Martina Alvarez', role: 'Registration', org: 'Plan A', image: `${IMG}/plana/Martina%20Alvarez%20-%20Registrations.png` },
  { name: 'Natalia Benejam', role: 'Commercial Coordinator', org: 'Plan A', image: `${IMG}/plana/Natalia%20Benejam%20-%20Comercial%20Coordinator.jpeg` },
  { name: 'Renata Bollini', role: 'Coordinator Assistant', org: 'Plan A', image: `${IMG}/plana/Renata%20Bollini%20-%20Coordinator%20Assitant.jpeg` },
  { name: 'Celeste Dichico', role: 'Academic Coordinator', org: 'Plan A', image: `${IMG}/plana/Celeste%20Dichico%20-%20Academic%20coordinator.jpg` },
];
