class ApplicationController < ActionController::API
  before_action :authenticate_user!, if: proc { request.controller_class.parent == Api }
  include DeviseTokenAuth::Concerns::SetUserByToken
end
