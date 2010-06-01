class PagesController < ApplicationController
  def home
	  @title = "Home"
  end

  def contact
	  @title = "Contact Dark Tide Software"
  end
  
  def about
	  @title = "About"
  end
  
  def videos 
	  @title = "Videos"
  end

  def artwork	
	  @title = "Art Work"
  end

end
