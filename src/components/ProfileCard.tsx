
// 📁 src/components/ProfileCard.tsx

import React from 'react';
import './ProfileCard.css';

// Interface para definir o formato dos dados de cada membro
interface MemberProps {
  photo: string;
  name: string;
  position: string;
  experience: string;
  specialty: string;
  bio: string;
}

// O componente agora recebe um 'member' com os dados
const ProfileCard: React.FC<{ member: MemberProps }> = ({ member }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <img src={member.photo} alt={`Foto de ${member.name}`} className="profile-photo" />
      </div>
      <div className="card-body">
        <h2 className="lawyer-name">{member.name}</h2>
        <p className="lawyer-position">{member.position}</p>
        <div className="lawyer-details">
          <span><strong>Especialidade:</strong> {member.specialty}</span>
          <span><strong>Experiência:</strong> {member.experience}</span>
        </div>
        <p className="lawyer-bio">{member.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;