import { Injectable } from '@angular/core';

// --- Interfaces from BOTH files ---
export interface Course {
  id: number;
  title: string;
  modules: string;
  description: string;
  imageUrl: string;
}
export interface Profile {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  status: 'Active' | 'Inactive';
}
export interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  logoUrl: string;
  type: 'Remote' | 'On-Site' | 'Hybrid';
}
export interface Hackathon {
  id: number;
  title: string;
  organizer: string;
  deadline: string;
  prizePool: string;
  imageUrl: string;
  mode: 'Online' | 'Offline';
  logoUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // --- Methods from BOTH files ---

  // Method to get all courses (from File 2)
  getCourses(): Course[] {
    return [
      {
        id: 1,
        title: 'Angular 17 Fundamentals',
        modules: '12 Modules',
        description:
          'Master the basics of Angular, from components and templates to routing.',
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      },
      {
        id: 2,
        title: 'Modern JavaScript (ES6+)',
        modules: '8 Modules',
        description:
          'Dive deep into modern JavaScript features like async/await, and more.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      },
      {
        id: 3,
        title: 'Advanced CSS & Sass',
        modules: '10 Modules',
        description:
          'Learn Flexbox, Grid, and advanced Sass techniques for modern layouts.',
        imageUrl:
          'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
      },
      {
        id: 4,
        title: 'Python for Data Science',
        modules: '15 Modules',
        description:
          'Explore data analysis and visualization using Pandas, Matplotlib, and Scikit-learn.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      },
      {
        id: 5,
        title: 'React - The Complete Guide',
        modules: '20 Modules',
        description:
          'Build powerful, fast, user-friendly and reactive web apps with React.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        id: 6,
        title: 'Node.js, Express & MongoDB',
        modules: '18 Modules',
        description:
          'Master backend development by building a complete REST API.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      },
      // --- Page 2 Courses ---
      {
        id: 7,
        title: 'TypeScript for Developers',
        modules: '6 Modules',
        description: 'Learn the fundamentals of TypeScript for robust code.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      },
      {
        id: 8,
        title: 'Docker & Kubernetes',
        modules: '11 Modules',
        description:
          'Containerize your applications and manage them with Kubernetes.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
      },
      {
        id: 9,
        title: 'Introduction to SQL',
        modules: '5 Modules',
        description: 'Master database fundamentals and complex queries with SQL.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
      },
      {
        id: 10,
        title: 'Git & GitHub Essentials',
        modules: '4 Modules',
        description:
          'Learn version control to collaborate effectively with other developers.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png',
      },
      {
        id: 11,
        title: 'Vue.js Fundamentals',
        modules: '9 Modules',
        description:
          'The progressive framework for building user interfaces.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      },
      {
        id: 12,
        title: 'Web Security Basics',
        modules: '7 Modules',
        description:
          'Learn about common vulnerabilities like XSS and CSRF.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/NES_Lock.svg/1200px-NES_Lock.svg.png',
      },
    ];
  }

  // Method to get all profiles (from File 2)
  getProfiles(): Profile[] {
    return [
      {
        id: 101,
        name: 'Alice Johnson',
        role: 'Frontend Developer',
        avatarUrl: 'https://i.pravatar.cc/150?img=26',
        rating: 4.5,
        status: 'Active',
      },
      {
        id: 102,
        name: 'Bob Smith',
        role: 'Backend Developer',
        avatarUrl: 'https://i.pravatar.cc/150?img=68',
        rating: 4.2,
        status: 'Active',
      },
      {
        id: 103,
        name: 'Catherine Brown',
        role: 'UI/UX Designer',
        avatarUrl: 'https://i.pravatar.cc/150?img=47',
        rating: 4.8,
        status: 'Inactive',
      },
      {
        id: 104,
        name: 'David Lee',
        role: 'Project Manager',
        avatarUrl: 'https://i.pravatar.cc/150?img=56',
        rating: 4.0,
        status: 'Active',
      },
      {
        id: 105,
        name: 'Ethan Carter',
        role: 'Data Scientist',
        avatarUrl: 'https://i.pravatar.cc/150?img=60',
        rating: 4.9,
        status: 'Active',
      },
      {
        id: 106,
        name: 'Fiona Glen',
        role: 'DevOps Engineer',
        avatarUrl: 'https://i.pravatar.cc/150?img=31',
        rating: 4.6,
        status: 'Inactive',
      },
      // --- Page 2 Profiles ---
      {
        id: 107,
        name: 'George Hill',
        role: 'Mobile Developer',
        avatarUrl: 'https://i.pravatar.cc/150?img=11',
        rating: 4.3,
        status: 'Active',
      },
      {
        id: 108,
        name: 'Hannah Ivy',
        role: 'QA Engineer',
        avatarUrl: 'https://i.pravatar.cc/150?img=32',
        rating: 4.1,
        status: 'Active',
      },
      {
        id: 109,
        name: 'Ian James',
        role: 'Security Analyst',
        avatarUrl: 'https://i.pravatar.cc/150?img=14',
        rating: 4.7,
        status: 'Active',
      },
      {
        id: 110,
        name: 'Julia King',
        role: 'Product Owner',
        avatarUrl: 'https://i.pravatar.cc/150?img=49',
        rating: 4.8,
        status: 'Inactive',
      },
      {
        id: 111,
        name: 'Kevin Long',
        role: 'Full-Stack Developer',
        avatarUrl: 'https://i.pravatar.cc/150?img=12',
        rating: 4.5,
        status: 'Active',
      },
      {
        id: 112,
        name: 'Laura Miller',
        role: 'Scrum Master',
        avatarUrl: 'https://i.pravatar.cc/150?img=25',
        rating: 4.4,
        status: 'Active',
      },
    ];
  }

  // Method to get all Internships (from File 1)
  getInternships(): Internship[] {
    return [
      // --- Page 1 Internships ---
      {
        id: 1,
        title: 'Frontend Developer Intern',
        company: 'TechSolutions Inc.',
        location: 'New York, NY',
        duration: '3 Months',
        stipend: '$2000/month',
        logoUrl:
          'https://placehold.co/100x100/27AE60/FFFFFF?text=TS&font=inter',
        type: 'Remote',
      },
      {
        id: 2,
        title: 'Backend Engineer Intern',
        company: 'DataCorp',
        location: 'San Francisco, CA',
        duration: '6 Months',
        stipend: '$2500/month',
        logoUrl:
          'https://placehold.co/100x100/2980B9/FFFFFF?text=DC&font=inter',
        type: 'On-Site',
      },
      {
        id: 3,
        title: 'UI/UX Design Intern',
        company: 'CreativeMinds Studio',
        location: 'Austin, TX',
        duration: '3 Months',
        stipend: '$1800/month',
        logoUrl:
          'https://placehold.co/100x100/E67E22/FFFFFF?text=CM&font=inter',
        type: 'Hybrid',
      },
      {
        id: 4,
        title: 'Data Science Intern',
        company: 'AnalyticsGlobal',
        location: 'Boston, MA',
        duration: '6 Months',
        stipend: '$3000/month',
        logoUrl:
          'https://placehold.co/100x100/8E44AD/FFFFFF?text=AG&font=inter',
        type: 'Remote',
      },
      {
        id: 5,
        title: 'Product Management Intern',
        company: 'FutureProducts Ltd.',
        location: 'Seattle, WA',
        duration: '3 Months',
        stipend: '$2200/month',
        logoUrl:
          'https://placehold.co/100x100/C0392B/FFFFFF?text=FP&font=inter',
        type: 'On-Site',
      },
      {
        id: 6,
        title: 'Software Engineer Intern',
        company: 'CodeCrafters',
        location: 'Remote',
        duration: '3 Months',
        stipend: '$2000/month',
        logoUrl:
          'https://placehold.co/100x100/16A085/FFFFFF?text=CC&font=inter',
        type: 'Remote',
      },
      // --- Page 2 Internships ---
      {
        id: 7,
        title: 'Marketing Intern',
        company: 'GrowthHackers',
        location: 'Miami, FL',
        duration: '3 Months',
        stipend: '$1500/month',
        logoUrl:
          'https://placehold.co/100x100/F1C40F/000000?text=GH&font=inter',
        type: 'Hybrid',
      },
      {
        id: 8,
        title: 'Cloud Engineer Intern',
        company: 'InfraCloud Solutions',
        location: 'Remote',
        duration: '6 Months',
        stipend: '$2800/month',
        logoUrl:
          'https://placehold.co/100x100/2C3E50/FFFFFF?text=IS&font=inter',
        type: 'Remote',
      },
      {
        id: 9,
        title: 'Mobile App Dev Intern',
        company: 'Appify',
        location: 'Chicago, IL',
        duration: '3 Months',
        stipend: '$2100/month',
        logoUrl:
          'https://placehold.co/100x100/27AE60/FFFFFF?text=A&font=inter',
        type: 'On-Site',
      },
      {
        id: 10,
        title: 'DevOps Intern',
        company: 'ScaleWell',
        location: 'San Francisco, CA',
        duration: '6 Months',
        stipend: '$3200/month',
        logoUrl:
          'https://placehold.co/100x100/2980B9/FFFFFF?text=SW&font=inter',
        type: 'Hybrid',
      },
      {
        id: 11,
        title: 'Cybersecurity Intern',
        company: 'SecureNet',
        location: 'Washington, D.C.',
        duration: '6 Months',
        stipend: '$2700/month',
        logoUrl:
          'https://placehold.co/100x100/C0392B/FFFFFF?text=SN&font=inter',
        type: 'On-Site',
      },
      {
        id: 12,
        title: 'QA Engineer Intern',
        company: 'TestRight',
        location: 'Remote',
        duration: '3 Months',
        stipend: '$1900/month',
        logoUrl:
          'https://placehold.co/100x100/8E44AD/FFFFFF?text=TR&font=inter',
        type: 'Remote',
      },
    ];
  }

  // Method to get all Hackathons (from File 1)
  getHackathons(): Hackathon[] {
    return [
      // --- Page 1 Hackathons ---
      {
        id: 101,
        title: 'InnovateAI 2025',
        organizer: 'TechCrunch',
        deadline: 'Dec 15, 2025',
        prizePool: '₹8,00,000',
        imageUrl: 'https://placehold.co/600x337/27AE60/FFFFFF?text=InnovateAI',
        logoUrl:
          'https://placehold.co/100x100/27AE60/FFFFFF?text=TC&font=inter',
        mode: 'Online',
      },
      {
        id: 102,
        title: 'CodeForGood Challenge',
        organizer: 'Google',
        deadline: 'Nov 30, 2025',
        prizePool: '₹4,00,000 + Swag',
        imageUrl: 'https://placehold.co/600x337/2980B9/FFFFFF?text=CodeForGood',
        logoUrl:
          'https://placehold.co/100x100/EA4335/FFFFFF?text=G&font=inter',
        mode: 'Online',
      },
      {
        id: 103,
        title: 'Web3 & DeFi Hackathon',
        organizer: 'ETHGlobal',
        deadline: 'Jan 05, 2026',
        prizePool: '₹20,00,000',
        imageUrl: 'https://placehold.co/600x337/8E44AD/FFFFFF?text=Web3+Hack',
        logoUrl:
          'https://placehold.co/100x100/8E44AD/FFFFFF?text=ETH&font=inter',
        mode: 'Offline',
      },
      {
        id: 104,
        title: 'Sustainable Future Hack',
        organizer: 'Microsoft',
        deadline: 'Dec 20, 2025',
        prizePool: 'Mentorship',
        imageUrl:
          'https://placehold.co/600x337/16A085/FFFFFF?text=Future+Hack',
        logoUrl:
          'https://placehold.co/100x100/00A4EF/FFFFFF?text=MS&font=inter',
        mode: 'Online',
      },
      {
        id: 105,
        title: 'Fintech Revolution',
        organizer: 'Stripe',
        deadline: 'Jan 10, 2026',
        prizePool: '₹12,00,000',
        imageUrl: 'https://placehold.co/600x337/C0392B/FFFFFF?text=Fintech',
        logoUrl:
          'https://placehold.co/100x100/635BFF/FFFFFF?text=S&font=inter',
        mode: 'Offline',
      },
      {
        id: 106,
        title: 'GameDev Masters',
        organizer: 'Unity',
        deadline: 'Dec 01, 2025',
        prizePool: '₹4,00,000 + Licenses',
        imageUrl: 'https://placehold.co/600x337/2C3E50/FFFFFF?text=GameDev',
        logoUrl:
          'https://placehold.co/100x100/2C3E50/FFFFFF?text=U&font=inter',
        mode: 'Online',
      },
      // --- Page 2 Hackathons ---
      {
        id: 107,
        title: 'HealthTech Innovators',
        organizer: 'Johnson & Johnson',
        deadline: 'Jan 20, 2026',
        prizePool: '₹10,00,000',
        imageUrl: 'https://placehold.co/600x337/27AE60/FFFFFF?text=HealthTech',
        logoUrl:
          'https://placehold.co/100x100/D41A23/FFFFFF?text=J&J&font=inter',
        mode: 'Offline',
      },
      {
        id: 108,
        title: 'API World Hackathon',
        organizer: 'Postman',
        deadline: 'Dec 25, 2025',
        prizePool: '₹6,00,000',
        imageUrl: 'https://placehold.co/600x337/E67E22/FFFFFF?text=API+World',
        logoUrl:
          'https://placehold.co/100x100/FF6C37/FFFFFF?text=PM&font=inter',
        mode: 'Online',
      },
      {
        id: 109,
        title: 'CyberSecurity CTF',
        organizer: 'HackerOne',
        deadline: 'Nov 25, 2025',
        prizePool: '₹15,00,000',
        imageUrl: 'https://placehold.co/600x337/C0392B/FFFFFF?text=CTF',
        logoUrl:
          'https://placehold.co/100x100/4946F8/FFFFFF?text=H1&font=inter',
        mode: 'Online',
      },
      {
        id: 110,
        title: 'EdTech Impact Hack',
        organizer: 'DiziEduTech',
        deadline: 'Jan 15, 2026',
        prizePool: '₹4,00,000',
        imageUrl: 'https://placehold.co/600x337/2980B9/FFFFFF?text=EdTech',
        logoUrl:
          'https://placehold.co/100x100/364AA4/FFFFFF?text=DET&font=inter',
        mode: 'Offline',
      },
      {
        id: 111,
        title: 'Mobile Innovation Challenge',
        organizer: 'Apple',
        deadline: 'Dec 10, 2025',
        prizePool: 'New MacBooks',
        imageUrl:
          'https://placehold.co/600x337/2C3E50/FFFFFF?text=Mobile+Hack',
        logoUrl:
          'https://placehold.co/100x100/A2AAAD/FFFFFF?text=A&font=inter',
        mode: 'Online',
      },
      {
        id: 112,
        title: 'Open Source Fest',
        organizer: 'Linux Foundation',
        deadline: 'Jan 30, 2026',
        prizePool: 'Prestige',
        imageUrl: 'https://placehold.co/600x337/8E44AD/FFFFFF?text=OpenSource',
        logoUrl:
          'https://placehold.co/100x100/FCC320/000000?text=LF&font=inter',
        mode: 'Online',
      },
    ];
  }
}