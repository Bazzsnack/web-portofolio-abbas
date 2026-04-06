import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Digital Product & UI Design', 'Creative Technology', 'Motion & Advertising'];

  const dummyProjects = [
    {
      id: 13,
      title: 'Lontong Kikil - Narrative Video Commercial',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/lontong-kikil-cover.png',
      contentMedia: [
        { type: 'youtube', url: 'rK-uBi8EvRM' }
      ],
      description: {
        en: "Directed and produced a narrative-driven commercial video for a local culinary brand. Seamlessly blended semi-drama storytelling with high-quality F&B cinematography to build an emotional connection with the audience while highlighting the product's authentic appeal.",
        id: "Menyutradarai dan memproduksi video komersial berbasis narasi untuk brand kuliner lokal. Memadukan penceritaan semi-drama dengan sinematografi F&B berkualitas tinggi secara mulus untuk membangun koneksi emosional dengan audiens sekaligus menonjolkan daya tarik autentik produk."
      }
    },
    {
      id: 12,
      title: '3D Animated Wedding Invitation - Elegant Digital Experience',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/wedding-3d-cover.png',
      contentMedia: [
        { type: 'youtube', url: 'QkVqfpiBh64' }
      ],
      description: {
        en: "Produced an elegant and cinematic 3D animated wedding invitation. Focused on creating fluid camera movements, detailed 3D modeling of event elements, and luxurious rendering to deliver a personalized and memorable digital invitation experience.",
        id: "Memproduksi undangan pernikahan animasi 3D yang elegan dan sinematik. Berfokus pada pembuatan gerakan kamera yang mulus, pemodelan 3D mendetail dari elemen acara, dan rendering mewah untuk memberikan pengalaman undangan digital yang dipersonalisasi dan berkesan."
      }
    },
    {
      id: 11,
      title: 'F&B Product Showcase - Dynamic Motion Ads',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/fnb-showcase-cover.png',
      contentMedia: [
        { type: 'youtube', url: '4I4SG_cEiMs' }
      ],
      description: {
        en: "Crafted a mouth-watering motion graphic campaign focused on highlighting the core menu of an F&B brand. Utilized dynamic animations, engaging transitions, and appetite-inducing visuals to captivate the target audience and elevate the product's digital market appeal.",
        id: "Membuat kampanye motion graphic yang menggugah selera dengan fokus menonjolkan menu utama dari brand F&B. Memanfaatkan animasi dinamis, transisi yang menarik, dan visual yang meningkatkan selera makan untuk memikat audiens target dan menaikkan daya tarik produk di pasar digital."
      }
    },
    {
      id: 10,
      title: 'Bazz Snack - Social Media Motion Ads',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/bazz-cover.png',
      contentMedia: [
        { type: 'youtube', url: 'i04np2xtc-Y' }
      ],
      description: {
        en: "Produced a vibrant, vertical motion graphic campaign for Bazz Snack tailored for social media platforms (Reels/Stories). Combined mouth-watering visuals with a clean layout and clear call-to-action to highlight the F&B menu, streamline the ordering flow, and drive sales conversions.",
        id: "Memproduksi kampanye motion graphic vertikal yang cerah untuk Bazz Snack, dirancang khusus untuk platform media sosial (Reels/Stories). Menggabungkan visual yang menggugah selera dengan tata letak yang bersih dan call-to-action yang jelas untuk menonjolkan menu F&B, mempermudah alur pemesanan, dan mendorong konversi penjualan."
      }
    },
    {
      id: 9,
      title: 'Gojek - Brand Motion Graphic Remake',
      category: 'Motion & Advertising',
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
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/frisian-cover.webp',
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
      category: 'Digital Product & UI Design',
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
