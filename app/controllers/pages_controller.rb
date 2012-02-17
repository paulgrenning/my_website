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

  def unitydevelopment
    @page_header = { :name => "Unity Development", :link => root_path}
  end

  def processingpage
    @page_header = { :name => "Processing Development", :link => root_path}
  end

  def earthquakeinfo 
    @page_header = { :name => "Earthquake Visualization Tool", :link => root_path}
  end

  def earthquakeanomilies 
    @page_header = { :name => "Earthquake Dataset", :link => root_path}
  end

  def vtkforwindows 
    @page_header = { :name => "Compiling VTK For Windows", :link => root_path}
  end
  
  def vtkprojects 
    @page_header = { :name => "VTK Projects", :link => root_path}
  end
  
  def solarflares
    @page_header = { :name => "Solar Flares Presentation", :link => root_path}
  end

  def websitecreation
    @page_header = { :name => "Web Development", :link => root_path}
  end

  def ninja
    @page_header = { :name => "Ninja Defense", :link => root_path}
  end
  
  def resume
    @page_header = { :name => "My Resume", :link => root_path, :theid => "resume-page"}
  end

  def downloadresume
    send_file 'public/downloads/Paul Grenning\'s Resume.pdf'
  end

  def viewearthquakesource
    @page_header = { :name => "Earthquake Visualization Source", :link => root_path, :theid => "resume-page"}
  end

  def lakemichiganinfo
    @page_header = { :name => "Lake Michigan Vis Tool", :link => root_path}
  end

  def supernovaepresentation
    @page_header = { :name => "Supernovae Presentation", :link => root_path}
  end

  def lakemichigandata
    @page_header = { :name => "Lake Michigan Dataset", :link => root_path}
  end

  def ctavisinfo
    @page_header = { :name => "Crazy Train Info", :link => root_path}
  end

  def ctavisdata
    @page_header = { :name => "CTA Data Collection", :link => root_path}
  end

  def earthquakesource
    send_file 'public/downloads/EarthquakeVisualizationSource.zip'
  end

  def earthquakeexecutable
    send_file 'public/downloads/EarthquakeVisualizationExecutable.zip'
  end

  def tornadovistool
    @page_header = { :name => "Tornado Visualization Tool", :link => root_path}
  end

  def tornadovisdata
    @page_header = { :name => "Tornado Visualization Data", :link => root_path}
  end

  def spacebarrage
    @page_header = { :name => "Space Barrage", :link => root_path}
  end
 
  def sewerblob
    @page_header = { :name => "Sewer Blob", :link => root_path}
  end

  def flightsimulator
    @page_header = { :name => "Virtual Reality Flight Simulator", :link => root_path}
  end

  def microwavedesign
    @page_header = { :name => "Microwave Interface Design", :link => root_path}
  end

  def microwavegroupdesign
    @page_header = { :name => "Microwave Design - Group 8", :link => root_path}
  end

  def vending
    @page_header = { :name => "Vending Machine Application", :link => root_path}
  end

  def shadywebcam
    @page_header = { :name => "Shady Webcam Application", :link => root_path}
  end

  def uiproject2
    @page_header = { :name => "Mirror Application", :link => root_path}
  end


end
