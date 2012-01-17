ActionController::Routing::Routes.draw do |map|
  map.contact '/contact', :controller => 'pages', :action => 'contact'
  map.about   '/about',   :controller => 'pages', :action => 'about'
  map.projects'/projects', :controller => 'pages', :action => 'projects'
  map.downloadresume'/download-resume', :controller => 'pages', :action => 'downloadresume'
  map.darktide'/dark-tide', :controller => 'pages', :action => 'darktide'
  map.riseotheurchins'Processing-Development/rise-o-the-urchins', :controller => 'pages', :action => 'riseotheurchins'
  map.bugsplat'Processing-Development/bug-splat', :controller => 'pages', :action => 'bugsplat'
  map.websitecreation'/website-creation', :controller => 'pages', :action => 'websitecreation'
  map.ninja'Processing-Development/ninja-defense', :controller => 'pages', :action => 'ninja'
  map.resume'/resume', :controller => 'pages', :action => 'resume'
  map.processingpage'/Processing-Development', :controller => 'pages', :action => 'processingpage'
  map.vtkprojects'/VTK-Projects', :controller => 'pages', :action => 'vtkprojects'
  map.unitydevelopment'/Unity-Projects', :controller => 'pages', :action => 'unitydevelopment'
  map.earthquakeinfo'VTK-projects/earthquake-visualization-tool', :controller => 'pages', :action => 'earthquakeinfo'
  map.earthquakeanomilies'VTK-projects/earthquake-anomilies', :controller => 'pages', :action => 'earthquakeanomilies'
  map.vtkforwindows'VTK-projects/install-vtk-for-windows', :controller => 'pages', :action => 'vtkforwindows'
  map.earthquakesource'VTK-projects/download-earthquake-source', :controller => 'pages', :action => 'earthquakesource'
  map.earthquakeexecutable'VTK-projects/download-earthquake-executable', :controller => 'pages', :action => 'earthquakeexecutable'
  map.viewearthquakesource'VTK-projects/view-earthquake-source', :controller => 'pages', :action => 'viewearthquakesource'
  map.solarflares'VTK-projects/solar-flares-presentation', :controller => 'pages', :action => 'solarflares'
  map.lakemichiganinfo'VTK-projects/lakemichigan-visualization-tool', :controller => 'pages', :action => 'lakemichiganinfo'
  map.lakemichigandata'VTK-projects/lakemichigan-data', :controller => 'pages', :action => 'lakemichigandata'
  map.supernovaepresentation'VTK-projects/supernovaepresentation', :controller => 'pages', :action => 'supernovaepresentation'
  map.tornadovistool'VTK-projects/tornado-visualization-tool', :controller => 'pages', :action => 'tornadovistool'
  map.tornadovisdata'VTK-projects/tornado-visualization-data', :controller => 'pages', :action => 'tornadovisdata'
  map.ctavisinfo'VTK-projects/cta-visualization-tool', :controller => 'pages', :action => 'ctavisinfo'
  map.ctavisdata'VTK-projects/cta-visualization-data', :controller => 'pages', :action => 'ctavisdata'
  map.spacebarrage'Unity-Projects/Space-Barrage', :controller => 'pages', :action => 'spacebarrage'
  map.sewerblob'Unity-Projects/Sewer-Blob', :controller => 'pages', :action => 'sewerblob'
  map.flightsimulator'Unity-Projects/Flight-Simulator', :controller => 'pages', :action => 'flightsimulator'
  map.microwavedesign'Microwave-Designs', :controller => 'pages', :action => 'microwavedesign'
  map.microwavegroupdesign'Microwave-Design-Group-8', :controller => 'pages', :action => 'microwavegroupdesign'



  map.root                :controller => 'pages', :action => 'home'
  #The priority is based upon order of creation: first created -> highest priority.

  # Sample of regular route:
  #   map.connect 'products/:id', :controller => 'catalog', :action => 'view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   map.purchase 'products/:id/purchase', :controller => 'catalog', :action => 'purchase'
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   map.resources :products

  # Sample resource route with options:
  #   map.resources :products, :member => { :short => :get, :toggle => :post }, :collection => { :sold => :get }

  # Sample resource route with sub-resources:
  #   map.resources :products, :has_many => [ :comments, :sales ], :has_one => :seller
  
  # Sample resource route with more complex sub-resources
  #   map.resources :products do |products|
  #     products.resources :comments
  #     products.resources :sales, :collection => { :recent => :get }
  #   end

  # Sample resource route within a namespace:
  #   map.namespace :admin do |admin|
  #     # Directs /admin/products/* to Admin::ProductsController (app/controllers/admin/products_controller.rb)
  #     admin.resources :products
  #   end

  # You can have the root of your site routed with map.root -- just remember to delete public/index.html.
  # map.root :controller => "welcome"

  # See how all your routes lay out with "rake routes"

  # Install the default routes as the lowest priority.
  # Note: These default routes make all actions in every controller accessible via GET requests. You should
  # consider removing or commenting them out if you're using named routes and resources.
#  map.connect ':controller/:action/:id'
#  map.connect ':controller/:action/:id.:format'
end
