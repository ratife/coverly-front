import { Link } from "react-router-dom";

export const MenuAdpro = () => {
  return (  
        <>
            <Link to="/adpro/" className="font-medium hover:text-primary transition-colors">Tableau de bord</Link>
            <Link to="/adpro/campaigns" className="font-medium hover:text-primary transition-colors">Campagnes</Link>
            <Link to="/adpro/analytics" className="font-medium hover:text-primary transition-colors">Analytics</Link>
            <Link to="/adpro/audience" className="font-medium hover:text-primary transition-colors">Audience</Link>
            <Link to="/adpro/facturation" className="font-medium hover:text-primary transition-colors">Facturation</Link>
        </>
  );
}