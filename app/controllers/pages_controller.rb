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
  
  def projects	
	  @title = "Projects"
  end

  def downloads
    send_file 'public/downloads/Paul Grenning\'s Resume.pdf'
  end

end
