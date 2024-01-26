export default function DashboardLayout({
  children, //A propriedade 'children' é recebida como um parâmetro
}: Readonly<{
  children: React.ReactNode; // 'children' deve ser do tipo React.ReactNode
}>) {
  return ( // O componente retorna uma estrutura HTML básica, onde devemos aplicar o conteudo todo em comum da aplicação
    <>
        <nav className="bg-blue-600">
          <ul>
            <li>Perfil</li>
            <li>Conta</li>
          </ul>
        </nav>
        {children} {/* O conteúdo do componente 'RootLayout' é renderizado aqui */}  
    </>
  );
}
