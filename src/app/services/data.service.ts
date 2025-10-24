import { Injectable } from '@angular/core';

// Interface for our Course object
export interface Course {
  id: number;
  title: string;
  modules: string;
  description: string;
  imageUrl: string;
}

// Interface for our Profile object
export interface Profile {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  status: 'Active' | 'Inactive';
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // Method to get all courses
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

  // Method to get all profiles
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
}