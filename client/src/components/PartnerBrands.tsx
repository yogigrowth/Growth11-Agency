// Partner brands with logo data
const partners = [
  {
    name: "ADLD Toyota",
    id: "adld-toyota",
    logoSrc: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="#f8f9fa" stroke="#e9ecef"/><text x="60" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#666">TOYOTA</text></svg>`)}`
  },
  {
    name: "VakeelSaab", 
    id: "vakeelsaab",
    logoSrc: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="#f8f9fa" stroke="#e9ecef"/><text x="60" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#666">VakeelSaab</text></svg>`)}`
  },
  {
    name: "Snapdeal",
    id: "snapdeal", 
    logoSrc: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="#f8f9fa" stroke="#e9ecef"/><text x="60" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#666">snapdeal</text></svg>`)}`
  },
  {
    name: "Network18",
    id: "network18",
    logoSrc: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="#f8f9fa" stroke="#e9ecef"/><text x="60" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#666">NETWORK18</text></svg>`)}`
  },
  {
    name: "Akiso Fashion",
    id: "akiso-fashion",
    logoSrc: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="#f8f9fa" stroke="#e9ecef"/><text x="60" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#666">AKISO</text></svg>`)}`
  },
  {
    name: "Satyam Ayurveda",
    id: "satyam-ayurveda", 
    logoSrc: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="#f8f9fa" stroke="#e9ecef"/><text x="60" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#666">Satyam</text></svg>`)}`
  },
  {
    name: "Women in the Hood",
    id: "women-in-the-hood",
    logoSrc: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="120" height="40" fill="#f8f9fa" stroke="#e9ecef"/><text x="60" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#666">Women in</text><text x="60" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#666">the Hood</text></svg>`)}`
  }
];

export default function PartnerBrands() {
  const handlePartnerClick = (partner: typeof partners[0]) => {
    console.log(`${partner.name} clicked`);
    // If the partner has a website, open it
    if (partner.id === 'women-in-the-hood') {
      window.open('https://womeninthehood.in/', '_blank');
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group cursor-pointer hover-elevate transition-all duration-300"
              onClick={() => handlePartnerClick(partner)}
              data-testid={`logo-partner-${partner.id}`}
            >
              <div className="bg-background border border-border rounded-md p-6 h-20 md:h-24 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={partner.logoSrc}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}