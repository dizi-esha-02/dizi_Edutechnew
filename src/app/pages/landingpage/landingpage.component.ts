import {
  Component,
  HostListener,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';

@Component({
  selector: 'app-landingpage', // === RENAMED ===
  templateUrl: './landingpage.component.html', // === RENAMED ===
  styleUrls: ['./landingpage.component.css'] // === RENAMED ===
})
// === RENAMED ===
export class LandingpageComponent implements OnInit, AfterViewInit { 
  @ViewChildren('section') sections!: QueryList<ElementRef>;

  // ============================
  // Header & Navigation
  // ============================
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  showScrollButton = false;

  // ============================
  // Hero Section
  // ============================
  hero = {
    subheading: 'FUTURE-READY EDUCATION',
    headline: 'Master In-Demand Tech Skills With Industry Experts',
    description:
      'Transform your career through hands-on learning, real-world projects, and personalized mentorship. Join 10,000+ successful graduates.',
    ctaText: 'Start Learning Free',
    imageUrl: '/assets/hero-3d.png'
  };

  stats = {
    students: '10K+',
    courses: '50+',
    partners: '100+',
    successRate: '95%'
  };

  live = {
    nextClass: 'Data Science Bootcamp',
    time: '3:00 PM IST',
    instructor: 'Dr. Sarah Chen'
  };

  // ============================
  // Popular Courses
  // ============================
  
  showAllCourses = false;

  popularCourses = [
    {
      icon: 'fa-solid fa-brain',
      title: 'AI & Machine Learning',
      level: 'Advanced',
      description:
        'Master neural networks, deep learning, and AI algorithms with TensorFlow and PyTorch',
      duration: '16 weeks',
      projects: 12,
      rating: 4.9,
      color: '#5e60ce'
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Cloud Architecture',
      level: 'Intermediate',
      description:
        'AWS, Azure, and GCP certification prep with real infrastructure projects',
      duration: '14 weeks',
      projects: 8,
      rating: 4.8,
      color: '#00b4d8'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Cyber Security',
      level: 'Advanced',
      description:
        'Ethical hacking, penetration testing, and security architecture',
      duration: '18 weeks',
      projects: 15,
      rating: 4.9,
      color: '#7209b7'
    },
    {
      icon: 'fa-solid fa-mobile',
      title: 'Mobile Development',
      level: 'All Levels',
      description: 'React Native, Flutter, and Swift for cross-platform apps',
      duration: '12 weeks',
      projects: 10,
      rating: 4.7,
      color: '#ff6b6b'
    },
    {
      icon: 'fa-solid fa-chart-network',
      title: 'Data Science',
      level: 'Intermediate',
      description:
        'Python, SQL, and statistical analysis for data-driven decisions',
      duration: '15 weeks',
      projects: 11,
      rating: 4.8,
      color: '#4361ee'
    },
    {
      icon: 'fa-solid fa-cube',
      title: 'Blockchain Dev',
      level: 'Advanced',
      description: 'Smart contracts, DApps, and Web3 development',
      duration: '16 weeks',
      projects: 9,
      rating: 4.9,
      color: '#3a0ca3'
    }
  ];

  get displayedCourses() {
    return this.showAllCourses ? this.popularCourses : this.popularCourses.slice(0, 3);
  }

  // ============================
  // About Us Section
  // ============================
  aboutUs = {
    title: 'WHY DIZIEDUTECH',
    headline: 'Redefining Tech Education For The Digital Age',
    description:
      'We bridge the gap between traditional education and industry requirements through innovative learning methodologies and cutting-edge curriculum.',
    imageUrl: '/assets/about-3d.png',
    features: [
      {
        icon: 'fa-solid fa-rocket',
        title: 'Project-Based Learning',
        description:
          'Learn by building real-world applications and portfolio projects'
      },
      {
        icon: 'fa-solid fa-users',
        title: '1:1 Mentorship',
        description:
          'Personalized guidance from industry experts and career coaches'
      },
      {
        icon: 'fa-solid fa-briefcase',
        title: 'Career Support',
        description:
          'Job placement assistance, interview prep, and networking opportunities'
      }
    ]
  };

  // ============================
  // Testimonials
  // ============================
  testimonials = [
    {
      text: 'The AI program completely transformed my career trajectory. Within 6 months, I transitioned from marketing to a machine learning engineer role at a leading tech company.',
      name: 'Priya Sharma',
      role: 'Machine Learning Engineer',
      company: 'TechCorp',
      course: 'AI & Machine Learning',
      image: '/assets/testimonial-1.jpg',
      rating: 5
    },
    {
      text: 'The hands-on projects and mentor support were incredible. I built a full-stack application that became the foundation of my startup.',
      name: 'Rahul Verma',
      role: 'Full-Stack Developer',
      company: 'Startup Founder',
      course: 'Full Stack Development',
      image: '/assets/testimonial-2.jpg',
      rating: 5
    },
    {
      text: 'As a working professional, the flexible schedule and practical approach helped me upskill without compromising my job.',
      name: 'Anjali Patel',
      role: 'Cloud Architect',
      company: 'Enterprise Solutions',
      course: 'Cloud Architecture',
      image: '/assets/testimonial-3.jpg',
      rating: 5
    },
    {
      text: 'The cybersecurity program gave me the skills to protect organizations from modern threats. The capstone project was a real penetration test.',
      name: 'Karthik Reddy',
      role: 'Security Analyst',
      company: 'CyberSecure Inc',
      course: 'Cyber Security',
      image: '/assets/testimonial-4.jpg',
      rating: 5
    }
  ];

  currentTestimonial = 0;

  nextTestimonial() {
    this.currentTestimonial =
      (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonial =
      (this.currentTestimonial - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  // ============================
  // Why Choose Us
  // ============================
  whyDiziEduTech = {
    headline: `Why Thousands Choose\nDiziEduTech`,
    description:
      'We combine cutting-edge technology with proven educational methodologies to deliver exceptional learning outcomes.',
    features: [
      {
        icon: 'fa-solid fa-gem',
        title: 'Industry-Aligned Curriculum',
        description:
          'Courses designed with input from top tech companies and updated quarterly'
      },
      {
        icon: 'fa-solid fa-network-wired',
        title: 'Global Community',
        description:
          'Connect with peers, mentors, and alumni across 50+ countries'
      },
      {
        icon: 'fa-solid fa-medal',
        title: 'Career Acceleration',
        description: 'Average salary increase of 45% for our graduates'
      }
    ],
    stats: [
      {
        icon: 'fa-solid fa-graduation-cap',
        value: '95%',
        label: 'Completion Rate',
        description: 'Students completing their courses successfully.'
      },
      {
        icon: 'fa-solid fa-briefcase',
        value: '85%',
        label: 'Job Placement',
        description: 'Students placed in top companies post graduation.'
      },
      {
        icon: 'fa-solid fa-star',
        value: '4.9/5',
        label: 'Student Rating',
        description: 'Average student satisfaction rating.'
      },
      {
        icon: 'fa-solid fa-clock',
        value: '6 Months',
        label: 'Average to Hire',
        description: 'Average time for graduates to secure a job.'
      }
    ]
  };

  // ============================
  // Pricing Plans (Completed)
  // ============================
  benefitPlans = [
  {
    title: 'Starter Plan',
    subtitle: 'Perfect for beginners starting their journey',
    price: '₹3,499',
    duration: '/month',
    highlight: false,
    features: [
      { text: 'Access to 10+ foundational courses', included: true },
      { text: 'Live mentor support (Weekends)', included: true },
      { text: '1 Certification', included: true },
      { text: 'Career guidance', included: false, tooltip: 'Available only in Pro & Premium' },
      { text: '1:1 Mentorship Sessions', included: false }
    ],
    buttonText: 'Get Started'
  },
  {
    title: 'Pro Plan',
    subtitle: 'Best for serious learners who want mentorship',
    price: '₹6,999',
    duration: '/month',
    highlight: true,
    features: [
      { text: 'Access to 30+ professional courses', included: true },
      { text: 'Live mentor sessions (3 per week)', included: true },
      { text: '3 Certifications + Career Projects', included: true },
      { text: '1:1 Mentorship Sessions', included: true },
      { text: 'Career Placement Support', included: true },
      { text: 'Exclusive Access to Community', included: true }
    ],
    buttonText: 'Join Pro'
  },
  {
    title: 'Premium Plan',
    subtitle: 'Designed for professionals aiming for mastery',
    price: '₹9,999',
    duration: '/month',
    highlight: false,
    features: [
      { text: 'All Courses + Future Updates', included: true },
      { text: 'Unlimited Live Classes', included: true },
      { text: '5 Certifications + Capstone Projects', included: true },
      { text: 'Dedicated Career Coach', included: true },
      { text: 'Internship Assistance', included: true },
      { text: 'Lifetime Community Access', included: true }
    ],
    buttonText: 'Go Premium'
  }
];


  // ============================
  // Partners
  // ============================
  currentPartner = 0;

  partners = [
    { 
      logo: '/assets/logo.png', 
      name: 'Microsoft', 
      details: 'Our curriculum is aligned with Microsoft certification standards, providing a clear path to becoming a certified professional.' 
    },
    { 
      logo: '/assets/logo.png', 
      name: 'Google', 
      details: 'We are an official Google Cloud partner, offering specialized training in GCP, Firebase, and other Google technologies.' 
    },
    { 
      logo: '/assets/logo.png', 
      name: 'Amazon', 
      details: 'As an AWS Training Partner, our cloud courses are approved by Amazon and taught by certified AWS instructors.' 
    },
    { 
      logo: '/assets/logo.png', 
      name: 'Meta', 
      details: 'Our mobile and AR/VR development tracks incorporate the latest technologies from Meta, including React Native and Spark AR.' 
    },
    { 
      logo: '/assets/logo.png', 
      name: 'Netflix', 
      details: 'We collaborate with engineers from Netflix to develop our backend systems and microservices curriculum.' 
    },
    { 
      logo: '/assets/logo.png', 
      name: 'Uber', 
      details: 'Our data science program features real-world case studies and datasets provided by our partners at Uber.' 
    }
  ];

  nextPartner() {
    this.currentPartner =
      (this.currentPartner + 1) % this.partners.length;
  }

  prevPartner() {
    this.currentPartner =
      (this.currentPartner - 1 + this.partners.length) %
      this.partners.length;
  }


  // ============================
  // Contact Section
  // ============================
  contact = {
    title: 'GET IN TOUCH',
    headline: 'Start Your Tech Journey Today',
    description:
      'Book a free 15-minute consultation with our education advisors to find the perfect program for your goals.'
  };

  currentYear = new Date().getFullYear();

  constructor() {}

  // ============================
  // Lifecycle Hooks
  // ============================
  ngOnInit() {
    this.updateScrollState();
  }

  ngAfterViewInit() {
    this.setupAnimations();
  }

  // ============================
  // Scroll & Section Handling
  // ============================
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollState();
    this.updateActiveSection();
  }

  updateScrollState() {
    this.isScrolled = window.pageYOffset > 100;
    this.showScrollButton = window.pageYOffset > 300;
  }

  updateActiveSection() {
    const scrollPosition = window.pageYOffset + 100;
    this.sections.forEach(section => {
      const element = section.nativeElement;
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        this.activeSection = element.id;
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
  }

  // ============================
  // UI Interactions
  // ============================
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  setupAnimations() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting)
            entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.animate-me')
      .forEach(el => observer.observe(el));
  }

  // ============================
  // Actions & Events
  // ============================
  submitContactForm() {
    alert('Thank you! Your message has been submitted successfully.');
  }

  onCourseHover(course: any) {
    console.log('Hovered on course:', course.title);
  }

  selectPlan(plan: any) {
    console.log('Selected plan:', plan.title);
  }

  toggleShowAllCourses() {
    this.showAllCourses = !this.showAllCourses;
  }
}