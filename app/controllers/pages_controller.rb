class PagesController < ApplicationController
  def home
	  @title = "Home"
  end

  def contact
	  @title = "Contact"
  end
  
  def about
	  @title = "About"
  end
  
  def help
	  @title = "Help"
  end
  
  def videos 
	  @title = "Videos"
  end

  def artwork	
	  @title = "Art Work"
  end

end
