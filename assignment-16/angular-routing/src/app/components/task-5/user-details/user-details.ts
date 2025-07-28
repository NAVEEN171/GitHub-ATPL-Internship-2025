import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Member {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  phone: string;
  joinDate: string;
  avatar: string;
}

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  members: Member[] = [
    {
      id: 1,
      name: 'John Anderson',
      email: 'john.anderson@company.com',
      position: 'Senior Developer',
      department: 'IT Department',
      phone: '+1 (555) 123-4567',
      joinDate: '2023-01-15',
      avatar: '👨‍💻',
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      email: 'sarah.mitchell@company.com',
      position: 'Project Manager',
      department: 'Operations',
      phone: '+1 (555) 234-5678',
      joinDate: '2022-08-20',
      avatar: '👩‍💼',
    },
    {
      id: 3,
      name: 'David Thompson',
      email: 'david.thompson@company.com',
      position: 'UI/UX Designer',
      department: 'Design Team',
      phone: '+1 (555) 345-6789',
      joinDate: '2023-03-10',
      avatar: '🎨',
    },
  ];

  viewMember(member: Member): void {
    console.log('Viewing member:', member);
    alert(
      `Viewing details for: ${member.name}\nPosition: ${member.position}\nEmail: ${member.email}`
    );
  }

  editMember(member: Member): void {
    console.log('Editing member:', member);
    alert(`Editing profile for: ${member.name}`);
  }
}
