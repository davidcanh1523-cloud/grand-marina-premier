import { useState } from 'react';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CoreFeaturesTab } from './components/CoreFeaturesTab.tsx';
import { FlycamSection } from './components/FlycamSection.tsx';
import { Floorplan3D } from './components/Floorplan3D.tsx';
import { VillaCollection } from './components/VillaCollection.tsx';
import { AmenitiesSection } from './components/AmenitiesSection.tsx';
import { InvestmentCalculator } from './components/InvestmentCalculator.tsx';
import { BrochureModal } from './components/BrochureModal.tsx';
import { SpeedAuditBadge } from './components/SpeedAuditBadge.tsx';
import { Footer } from './components/Footer.tsx';

function MainLayout() {
  const { theme } = useThemeLanguage();
  const [isBrochureOpen, setIsBrochureOpen] = useState(() => {
    return typeof window !== 'undefined' && (window.location.hash === '#brochure' || window.location.search.includes('modal=brochure'));
  });
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedVillaName, setSelectedVillaName] = useState<string | undefined>(undefined);

  const handleOpenBrochure = (villaName?: string) => {
    setSelectedVillaName(villaName);
    setIsBrochureOpen(true);
  };

  const handleScrollToFlycam = () => {
    const el = document.getElementById('flycam');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-[#C8A97E] selection:text-[#07090E] ${
      theme === 'dark' ? 'bg-[#07090E] text-slate-100' : 'bg-[#FAF8F5] text-slate-900'
    }`}>
      {/* Navigation */}
      <Navbar
        onOpenBrochure={() => handleOpenBrochure()}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenFlycam={handleScrollToFlycam}
        />

        {/* Core Features & Tabs from Image 1 */}
        <CoreFeaturesTab
          onOpenBrochure={() => handleOpenBrochure()}
          onOpenFlycam={handleScrollToFlycam}
          onOpenAudit={() => setIsAuditOpen(true)}
        />

        {/* Feature 3: Flycam 4K Showcase Section */}
        <FlycamSection
          onOpenBrochure={() => handleOpenBrochure()}
        />

        {/* Feature 1: Interactive 3D Floorplan & Amenities */}
        <Floorplan3D
          onSelectVillaForBrochure={(villaName) => handleOpenBrochure(villaName)}
        />

        {/* Luxury Villa Collection */}
        <VillaCollection
          onSelectVilla={(villaName) => handleOpenBrochure(villaName)}
          onOpenBrochure={() => handleOpenBrochure()}
        />

        {/* 6-Star Bespoke Amenities */}
        <AmenitiesSection
          onOpenBrochure={() => handleOpenBrochure()}
        />

        {/* Investment & Yield Simulator */}
        <InvestmentCalculator
          onOpenBrochure={() => handleOpenBrochure()}
        />
      </main>

      {/* Footer & Mobile Actions */}
      <Footer
        onOpenBrochure={() => handleOpenBrochure()}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      {/* Feature 2: Automated Brochure Download Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        preselectedVilla={selectedVillaName}
      />

      {/* Feature 4: Google PageSpeed 99/100 & SEO Audit Modal */}
      <SpeedAuditBadge
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeLanguageProvider>
      <MainLayout />
    </ThemeLanguageProvider>
  );
}

export default App;
