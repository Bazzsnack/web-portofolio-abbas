import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'UI/UX & Web', 'Tech & Automation', 'Content Production'];

  const dummyProjects = [
    {
      id: 9,
      title: 'Gojek - Brand Motion Graphic Remake',
      category: 'Content Production',
      thumbnail: '/assets/portfolio/gojek-cover.webp',
      contentMedia: [
        { type: 'youtube', url: '84RzYxZbPDQ' }
      ],
      description: {
        en: "Reimagined and produced a dynamic motion graphic animation for the Gojek brand. Focused on fluid transitions and energetic pacing to capture the brand's fast-paced, innovative identity while demonstrating advanced motion design and visual storytelling skills.",
        id: "Membuat ulang dan memproduksi animasi motion graphic dinamis untuk brand Gojek. Berfokus pada transisi yang mulus dan tempo yang energik untuk menangkap identitas brand yang cepat dan inovatif, sekaligus mendemonstrasikan keahlian desain motion dan visual storytelling tingkat lanjut."
      }
    },
    {
      id: 8,
      title: 'Frisian Flag - Product Animation Ads',
      category: 'Content Production',
      thumbnail: '/assets/portfolio/frisian-cover.png',
      thumbnailZoom: true,
      contentMedia: [
        { type: 'youtube', url: 'UhbUJ9_Qd5o' }
      ],
      description: {
        en: "Directed and produced a dynamic motion graphic advertisement for Frisian Flag. Leveraged digital storytelling and modern aesthetics to highlight key nutritional benefits, driving audience engagement and brand awareness.",
        id: "Memproduksi iklan motion graphic dinamis untuk Frisian Flag. Memanfaatkan digital storytelling dan estetika modern untuk menonjolkan manfaat nutrisi utama, mendorong engagement audiens dan brand awareness."
      }
    },
    {
      id: 7,
      title: 'Kirana Tour & Travel - Booking Website',
      category: 'UI/UX & Web',
      thumbnail: '/assets/portfolio/kirana-thumb.webp',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/kirana-ui-1.webp' },
        { type: 'image', url: '/assets/portfolio/kirana-ui-2.webp' },
        { type: 'image', url: '/assets/portfolio/kirana-ui-3.webp' }
      ],
      description: {
        en: "Engineered a seamless travel booking platform for Kirana Tour & Travel. Focused on designing an intuitive UI/UX to enhance the customer journey and successfully integrated a secure payment gateway via Midtrans to streamline business transactions.",
        id: "Membangun platform pemesanan travel untuk Kirana Tour & Travel. Fokus merancang UI/UX yang intuitif untuk meningkatkan pengalaman pelanggan dan berhasil mengintegrasikan gateway pembayaran yang aman melalui Midtrans untuk memperlancar transaksi bisnis."
      }
    },
    {
      id: 1,
      title: 'Modern E-Commerce Checkout',
      category: 'UI/UX & Web',
      thumbnail: '/assets/portfolio/placeholder-thumb.jpg',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/placeholder-full.jpg' },
        { type: 'image', url: '/assets/portfolio/placeholder-full.jpg' }
      ],
      description: 'A comprehensive redesign of a digital checkout flow, reducing bounce rates by 25%. Focused on a clean, minimal user interface to guide users effortlessly through the purchasing process.'
    },
    {
      id: 2,
      title: 'Cinematic B-Roll Promo',
      category: 'Content Production',
      thumbnail: '/assets/portfolio/placeholder-thumb.jpg',
      contentMedia: [
        { type: 'video', url: '/assets/portfolio/placeholder-full.jpg' },
        { type: 'image', url: '/assets/portfolio/placeholder-full.jpg' }
      ],
      description: 'Directed and edited a fast-paced vertical B-roll sequence tailored for TikTok and Instagram Reels. Emphasized seamless transitions and beat-syncing for maximum audience retention.'
    },
    {
      id: 3,
      title: 'Digital Workspace Dashboard',
      category: 'UI/UX & Web',
      thumbnail: '/assets/portfolio/placeholder-thumb.jpg',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/placeholder-full.jpg' }
      ],
      description: 'Engineered a real-time data dashboard using React. Integrated various API endpoints to visual complex datasets into easy-to-read interactive charts.'
    },
    {
      id: 4,
      title: 'Tech Gadget Launch',
      category: 'Content Production',
      thumbnail: '/assets/portfolio/placeholder-thumb.jpg',
      contentMedia: [
        { type: 'video', url: '/assets/portfolio/placeholder-full.jpg' }
      ],
      description: 'Produced a product launch trailer highlighting key features and high-end materials. Utilized advanced color grading and dynamic lighting to establish a premium brand feel.'
    },
    {
      id: 5,
      title: 'Restaurant Order Automation',
      category: 'Tech & Automation',
      thumbnail: '/assets/portfolio/placeholder-thumb.jpg',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/placeholder-full.jpg' },
        { type: 'image', url: '/assets/portfolio/placeholder-full.jpg' }
      ],
      description: 'Connected an ordering API with a central inventory database to automate incoming F&B orders. Cut down manual order input time by 80% and reduced human error.'
    },
    {
      id: 6,
      title: 'Brand Identity Redesign',
      category: 'UI/UX & Web',
      thumbnail: '/assets/portfolio/placeholder-thumb.jpg',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/placeholder-full.jpg' }
      ],
      description: 'Designed a complete brand package including logo, typography, and marketing assets. Created a cohesive visual language that aligned with the brand\'s new modern vision.'
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? dummyProjects
    : dummyProjects.filter(project => project.category === activeCategory);

  return (
    <div className="page-container fade-in">
      <div className="content-wrapper">
        <div className="sidebar slide-up">
          <h1>{t('projects', 'title')}</h1>
          <p>
            {t('projects', 'desc')}
          </p>
        </div>

        <div className="projects-main-content">
          <div className="filter-tabs slide-up" style={{ animationDelay: '0.1s' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid slide-up" style={{ animationDelay: '0.2s' }}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.thumbnail} alt={project.title} className={`project-thumbnail${project.thumbnailZoom ? ' thumbnail-zoomed' : ''}`} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
