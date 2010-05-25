# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_sample_app2_session',
  :secret      => '359b324b55db6d0a0e0a6d9fd65f5791173422cb0513ddf5a43db5af37e9ac6e6c183ce9b5b309ca2bd563924a593480831428322bc76f16e7e4135aca6951b9'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
