class Api::V1::ProjectsController < Api::V1::BaseController
  def index
    respond_with Project.all
  end

  def create
    respond_with :api, :v1, Project.create(project_params)
  end

  def update
    project = Project.find(params[:id])
    project.update_attributes(project_params)
    respond_with project, json: project
  end

  def destroy
    respond_with Project.destroy(params[:id])
  end

  private

  def project_params
    params.require(:project).permit(:id, :title, :notes, :state, :focus, :due, :actions_behaviour)
  end
end
