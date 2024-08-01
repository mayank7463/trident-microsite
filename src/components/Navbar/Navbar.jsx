import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { faBold } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlaysRef = useRef(null);
  const bodyRef = useRef(document.body);
  const menuBtnRef = useRef(null);
  const menuItemsRef = useRef(null);
  const expandBtnRefs = useRef([]);

  useEffect(() => {
    const body = bodyRef.current;
    const overlays = overlaysRef.current;
    const menuBtn = menuBtnRef.current;
    const menuItems = menuItemsRef.current;

    const liElems = menuItems.querySelectorAll('.menu-items li');
    liElems.forEach((elem) => {
      const childrenElems = elem.querySelectorAll('.dropdown-menu');
      if (childrenElems.length > 0) {
        elem.firstElementChild.classList.add('expand-btn');
        elem.classList.add('dropdown');
      }
    });

    function toggle() {
      body.classList.toggle('overflow');
      setIsOverlayActive(!isOverlayActive);
      setIsMenuOpen(!isMenuOpen);
    }

    const handleMenuClick = (e) => {
      e.stopPropagation();
      toggle();
    };

    const handleEscapeKey = (event) => {
      const key = event.key;
      if (key === 'Escape' && isMenuOpen) {
        toggle();
      }
    };

    const handleDocumentClick = (e) => {
      let target = e.target,
        its_menu = target === menuItems || menuItems.contains(target),
        its_hamburger = target === menuBtn,
        menu_is_active = isMenuOpen;
      if (!its_menu && !its_hamburger && menu_is_active) {
        toggle();
      }
    };

    const expandBtn = menuItems.querySelectorAll('.expand-btn');
    expandBtnRefs.current = Array.from(expandBtn);

    const handleExpandBtnClick = (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.currentTarget.classList.toggle('open');
        const submenu = e.currentTarget.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    };

    expandBtn.forEach((btn) => {
      btn.addEventListener('click', handleExpandBtnClick);
    });

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        if (isMenuOpen) {
          toggle();
        }
        expandBtnRefs.current.forEach((btn) => {
          btn.classList.remove('open');
          const submenu = btn.nextElementSibling;
          submenu.style.display = ''; // Reset display style
        });
      }
    };

    menuBtn.addEventListener('click', handleMenuClick);
    window.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('resize', handleResize);

    return () => {
      menuBtn.removeEventListener('click', handleMenuClick);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
      expandBtn.forEach((btn) => {
        btn.removeEventListener('click', handleExpandBtnClick);
      });
    };
  }, [isMenuOpen, isOverlayActive]);

  return (
    <>
      <header className="navbar sticky">
        <Link to={'https://www.tridentindia.com/company'} className="logo"><img src="./Navbar/logo.png" className="h-10" alt="Hil Logo" /></Link>
        <div ref={menuBtnRef} className="menu-btn">
          <div className="menu-btn__lines"></div>
        </div>
        <ul ref={menuItemsRef} className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to={'/'} className="menu-item">Home</Link></li>
          <li>
            <a href="#" className="menu-item">Corporate Overview</a>
            <ul className="dropdown-menu xyz">
               <div className='flex lg:flex-row flex-col '>
                    <div>
                          <li><Link to={'/weaving-excellence'} className="menu-item">Weaving excellence in all that we do</Link></li>
                          <li><Link to={'/expansive-footprint'} className="menu-item">Mapping our expansive footprint</Link></li>
                          <li><Link to={'/diverse-segments'} className="menu-item">Creating value through diverse segments</Link></li>
                          <li><Link to={'/chair-message'} className="menu-item">Chairman’s message</Link></li>
                          <li><Link to={'/enduring-legacy'} className="menu-item">An enduring legacy of excellence</Link></li>
                          <li><Link Link to={'/financial-Highlights'} className="menu-item">Financial highlights</Link></li>
                        
                         
                    </div>
                    <div>
                         <li><Link to={'/leading-international'} className="menu-item">An embellished portfolio of leading International Home Textile Brands</Link></li>
                         <li><Link to={'/macroeconomic-trends'} className="menu-item">Macroeconomic trends in action</Link></li>
                          <li><Link Link to={'/paper-brands'} className="menu-item">Portfolio of Yarn and Paper Brands</Link></li>
                          <li><Link to={'/environment'} className="menu-item">Environment</Link></li>
                          <li><Link to={'/social'} className="menu-item">Social</Link></li>
                          <li><Link to={'/bod'} className="menu-item">Board of Directors</Link></li>
                          <li><Link to={'/excellence'} className="menu-item">Excellence at its best</Link></li>
                    </div>
               </div>
            </ul>
          </li>
          {/* <li>
            <a href="#" className="menu-item">Corporate Overview</a>
            <ul className="dropdown-menu">
              <li><Link target='_blank' to={'./Pdf/board-report.pdf'} className="menu-item">Board’s Report & its Annexures</Link></li>
              <li><Link target='_blank' to={'./Pdf/management.pdf'} className="menu-item">Management Discussion and Analysis</Link></li>
              <li><Link target='_blank' to={'./Pdf/corporate-gov.pdf'} className="menu-item">Corporate Governanace Report</Link></li>
              <li><Link target='_blank' to={'./Pdf/brsr.pdf'} className="menu-item">Business Responsibility & Sustainability Report</Link></li>
            </ul>
          </li> */}
          <li>
            <a href="#" className="menu-item">Management Reports</a>
            <ul className="dropdown-menu">
              <li><Link target='_blank' to={'./pdf/02. Trident MDA 24.07.2024.pdf'} className="menu-item">Management Discussion and Analysis</Link></li>
              <li><Link target='_blank' to={'./pdf/03. Trident BRSR 24.07.2024.pdf'} className="menu-item">Business Responsibility
              & Sustainability Reporting</Link></li>
              <li><Link target='_blank' to={'./pdf/04. Trident DR 24.07.2024.pdf'} className="menu-item">Directors’ Report</Link></li>
              <li><Link target='_blank' to={'./pdf/05. Trident CG 24.07.2024.pdf'} className="menu-item">Corporate Governance Report</Link></li>
            </ul>
          </li>
          <li className=''>
            <a href="#" className="menu-item">Financial Statements</a>
            <ul className="dropdown-menu">
              <li><Link target='_blank' to={'./pdf/06. Trident SFS 24.07.2024.pdf'} className="menu-item">Standalone</Link></li>
              <li><Link target='_blank' to={'./pdf/07. Trident CFS 24.07.2024.pdf'} className="menu-item">Consolidated</Link></li>
            </ul>
          </li>
          <li><Link target='_blank' to={'./pdf/Trident Notice 24.07.2024.pdf'} className="menu-item">Notice</Link></li>
          <li><Link target='_blank' to={'https://assets.tridentindia.com/Final_Annual_Report_2023_24_8f17c9414b.pdf'} className="menu-item download bg-[#0c8678]" >Download full Report</Link></li>
        </ul>
      </header>
      
      
    </>
  );
};

export default Navbar;
