const SocialMediaLinks = () => {

  
  return (
    <div className="h-24 bg-black">
      
      {/* Facebook link and icon */}
      <div className="flex justify-center gap-5">  
        <a href="https://www.facebook.com/trashpandacomic/">
          <img 
            src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png"
            alt="Facebook"
            className="w-10 h-10 hover:opacity-50 transition ease-in-out duration-500"
          />
        </a>

        {/* Instagram link and icon */}
        <a href="https://www.instagram.com/trashpandacomic/">
          <img 
            src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/instagram-512.png"
            alt="Instagram"
            className="w-10 h-10 hover:opacity-50 transition ease-in-out duration-500"
          />
        </a>
      </div>    

    </div>
  )
}

export default SocialMediaLinks