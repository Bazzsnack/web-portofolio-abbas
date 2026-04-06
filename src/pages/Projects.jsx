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
      id: 21,
      title: 'Laundry Manager - Mobile App UI/UX Design',
      category: 'Digital Product & UI Design',
      thumbnail: '/assets/portfolio/laundry-mobile-cover.webp',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/laundry-mobile-ui1.webp' },
        { type: 'image', url: '/assets/portfolio/laundry-mobile-ui2.webp' },
        { type: 'image', url: '/assets/portfolio/laundry-mobile-ui3.webp' },
        { type: 'image', url: '/assets/portfolio/laundry-mobile-ui4.webp' }
      ],
      description: {
        en: "Crafted a user-centric mobile application design for laundry business operations. Prioritized a streamlined user flow for order tracking, customer management, and digital receipt generation, ensuring a smooth and visually pleasing experience for business owners.",
        id: "Merancang desain aplikasi seluler yang berpusat pada pengguna untuk operasional bisnis penatu (laundry). Mengutamakan alur pengguna yang efisien untuk pelacakan pesanan, manajemen pelanggan, dan pembuatan tanda terima digital, memastikan pengalaman yang lancar dan menyenangkan secara visual bagi pemilik bisnis."
      }
    },
    {
      id: 20,
      title: 'Kos Manager - Mobile App UI/UX Design',
      category: 'Digital Product & UI Design',
      thumbnail: '/assets/portfolio/kos-mobile-cover.webp',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/kos-mobile-ui1.webp' },
        { type: 'image', url: '/assets/portfolio/kos-mobile-ui2.webp' },
        { type: 'image', url: '/assets/portfolio/kos-mobile-ui3.webp' },
        { type: 'image', url: '/assets/portfolio/kos-mobile-ui4.webp' },
        { type: 'image', url: '/assets/portfolio/kos-mobile-ui5.webp' }
      ],
      description: {
        en: "Designed a mobile application interface for boarding house management. Focused on delivering a highly accessible and intuitive mobile UX, allowing property owners to manage tenants, monitor rent statuses, and handle operational tasks on the go.",
        id: "Merancang antarmuka aplikasi seluler untuk manajemen rumah kos. Berfokus pada penyajian UX seluler yang sangat mudah diakses dan intuitif, memungkinkan pemilik properti mengelola penyewa, memantau status sewa, dan menangani tugas operasional secara langsung dari ponsel."
      }
    },
    {
      id: 19,
      title: 'Web POS (Point of Sale) - UI/UX System',
      category: 'Digital Product & UI Design',
      thumbnail: '/assets/portfolio/web-pos-cover.webp',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/web-pos-1.webp' },
        { type: 'image', url: '/assets/portfolio/web-pos-2.webp' },
        { type: 'image', url: '/assets/portfolio/web-pos-3.webp' }
      ],
      description: {
        en: "Architected the user interface and experience for a web-based Point of Sale (POS) system. Designed to streamline cashier operations, inventory tracking, and sales reporting with a user-friendly, responsive layout tailored for fast-paced retail or F&B environments.",
        id: "Merancang antarmuka dan pengalaman pengguna untuk sistem Point of Sale (POS) berbasis web. Didesain untuk menyederhanakan operasi kasir, pelacakan inventaris, dan pelaporan penjualan dengan tata letak yang responsif dan ramah pengguna, disesuaikan untuk lingkungan ritel atau F&B yang serba cepat."
      }
    },
    {
      id: 18,
      title: 'Kos Manager - Web Application UI/UX',
      category: 'Digital Product & UI Design',
      thumbnail: '/assets/portfolio/kos-manager-cover.webp',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/kos-manager-cover-1.webp' },
        { type: 'image', url: '/assets/portfolio/kos-manager-cover-2.webp' },
        { type: 'image', url: '/assets/portfolio/kos-manager-cover-3.webp' },
        { type: 'image', url: '/assets/portfolio/kos-manager-cover-4.webp' }
      ],
      description: {
        en: "Designed an intuitive web application for boarding house (kos) management. Focused on creating a seamless user experience for property owners to track tenants, payments, and room availability efficiently through a clean and modern dashboard interface.",
        id: "Merancang aplikasi web yang intuitif untuk manajemen rumah kos. Berfokus pada penciptaan pengalaman pengguna yang mulus bagi pemilik properti untuk melacak penyewa, pembayaran, dan ketersediaan kamar secara efisien melalui antarmuka dasbor yang bersih dan modern."
      }
    },
    {
      id: 17,
      title: 'Instagram Reels - Dynamic Social Media Marketing',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/ig-reels-marketing-cover.webp',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/ig-reels-marketing-grid-collection.webp' }
      ],
      description: {
        en: "Designed and edited a series of engaging, vertical Instagram Reels for social media marketing. Focused on fast-paced dynamic visuals, product showcases, and audience engagement.",
        id: "Merancang dan mengedit serangkaian Reels Instagram vertikal yang menarik untuk pemasaran media sosial. Berfokus pada visual dinamis yang cepat, pameran produk, dan keterlibatan audiens."
      }
    },
    {
      id: 16,
      title: 'F&B Social Media Feed - Design System Collection',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/fnb-feed-system-cover.webp',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/fnb-feed-collection-grid1.webp' },
        { type: 'image', url: '/assets/portfolio/fnb-feed-collection-grid.webp' }
      ],
      description: {
        en: "Architected a cohesive visual design system for an F&B brand's social media grid. This collection showcases a diverse range of strategically designed posts—including product showcases, interactive polls, testimonials, and nutritional benefit breakdowns—all optimized for maximum audience engagement and brand recall.",
        id: "Membangun sistem desain visual yang kohesif untuk grid media sosial brand F&B. Koleksi ini menampilkan beragam postingan yang dirancang secara strategis—termasuk pameran produk, jajak pendapat interaktif, testimoni, dan perincian manfaat nutrisi—semuanya dioptimalkan untuk engagement audiens dan daya ingat brand yang maksimal."
      }
    },
    {
      id: 15,
      title: 'Yamaha Fazzio - Carrousel Feed Design',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/fazzio-carousel-thumb.webp',
      contentMedia: [
        { type: 'image', url: '/assets/portfolio/fazzio-carousel-slide1.webp' },
        { type: 'image', url: '/assets/portfolio/fazzio-carousel-slide2.webp' },
        { type: 'image', url: '/assets/portfolio/fazzio-carousel-slide3.webp' },
        { type: 'image', url: '/assets/portfolio/fazzio-carousel-slide4.webp' },
        { type: 'image', url: '/assets/portfolio/fazzio-carousel-slide5.webp' },
        { type: 'image', url: '/assets/portfolio/fazzio-carousel-slide6.webp' },
        { type: 'image', url: '/assets/portfolio/fazzio-carousel-slide7.webp' }
      ],
      description: {
        en: "Designed a dynamic and modern Instagram carousel feed for Yamaha Fazzio. Focused on cohesive visual storytelling, vibrant layout, and brand consistency to effectively engage the Gen Z target audience and highlight the product's stylish features.",
        id: "Merancang desain feed Instagram carousel yang dinamis dan modern untuk Yamaha Fazzio. Berfokus pada visual storytelling yang kohesif, tata letak yang cerah, dan konsistensi brand untuk secara efektif menarik audiens target Gen Z dan menonjolkan fitur-fitur bergaya produk."
      }
    },
    {
      id: 14,
      title: 'Eco-Innovation System - Visual Storytelling',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/eco-innovation-cover.webp',
      contentMedia: [
        { type: 'youtube', url: 'qgNokGpYILU' }
      ],
      description: {
        en: "Directed a compelling visual storytelling project showcasing an eco-friendly innovation: a rainwater utilization system for school irrigation. Translated complex environmental mechanisms into an engaging and easy-to-understand narrative, highlighting sustainability and technological impact.",
        id: "Mengarahkan proyek visual storytelling yang memikat untuk memamerkan inovasi ramah lingkungan: sistem pemanfaatan air hujan untuk pengairan sekolah. Menerjemahkan mekanisme lingkungan yang kompleks menjadi narasi yang menarik dan mudah dipahami, dengan menonjolkan nilai keberlanjutan dan dampak teknologi."
      }
    },
    {
      id: 13,
      title: 'Lontong Kikil - Narrative Video Commercial',
      category: 'Motion & Advertising',
      thumbnail: '/assets/portfolio/lontong-kikil-cover.webp',
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
      thumbnail: '/assets/portfolio/wedding-3d-cover.webp',
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
      thumbnail: '/assets/portfolio/fnb-showcase-cover.webp',
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
      thumbnail: '/assets/portfolio/bazz-cover.webp',
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
