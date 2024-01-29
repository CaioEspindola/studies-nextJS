'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ navLinks }) => {
  const pathname = usePathname() //Hook para saber em que caminho e rota estou
  console.log(pathname) //Hook para saber em que caminho e rota estou
  return (
      <nav>
        <ul>           
          {navLinks.map((link) => {
            return (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>                
              </li>
            );
          })}             
        </ul>
      </nav> 
  )}
              
export default Navigation