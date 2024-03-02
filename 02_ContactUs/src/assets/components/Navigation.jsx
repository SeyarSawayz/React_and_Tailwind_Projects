function Navigation(){
    return(
        
            <nav className="flex justify-between font-Poppins items-center container mx-auto h-[72px]  p-4">
                <div>
                    <img src="/images/logo.png" alt="" />
                </div>
                <ul className="flex items-center gap-4 font-[500px]">
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        
    )
}
export default Navigation