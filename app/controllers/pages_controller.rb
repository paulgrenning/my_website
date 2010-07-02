class PagesController < ApplicationController

  def home
	  @title = "Home"
  end

  def darktide
    @page_header = { :name => "Dark Tide Software", :link => root_path}
  end

  def riseotheurchins
    @page_header = { :name => "Rise O' The Urchins", :link => root_path}
  end

  def bugsplat
    @page_header = { :name => "Bug Splat", :link => root_path}
  end

  def websitecreation
    @page_header = { :name => "Creation Of My Site", :link => root_path}
  end

  def ninja
    @page_header = { :name => "Ninja Defense", :link => root_path}
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
