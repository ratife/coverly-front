import { Link } from "react-router-dom";

export const MenuPublic = () => {
  return (  
       <>
            <Link to="/" className="font-medium hover:text-primary transition-colors">Acceuil</Link>
            <Link to="/pricing" className="font-medium hover:text-primary transition-colors">Tarifs</Link>
            <Link to="/l_adpro" className="font-medium hover:text-primary transition-colors">Annonceur</Link>
            <Link to="/l_pub" className="font-medium hover:text-primary transition-colors">Créateur de contenu</Link>
        </>
  );
}
