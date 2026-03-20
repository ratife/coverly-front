import { Link } from "react-router-dom";

export const MenuAdpro = () => {
  return (  
        <>
            <Link to="/pub/" className="font-medium hover:text-primary transition-colors">Tableau de bord</Link>
            <Link to="/pub/campaigns" className="font-medium hover:text-primary transition-colors">Campagnes</Link>
            <Link to="/pub/analytics" className="font-medium hover:text-primary transition-colors">Analytics</Link>
            <Link to="/pub/audience" className="font-medium hover:text-primary transition-colors">Audience</Link>
            <Link to="/pub/facturation" className="font-medium hover:text-primary transition-colors">Facturation</Link>
        </>
  );
}