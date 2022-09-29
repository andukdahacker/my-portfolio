import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Project from "../../components/Project";
import { projectData } from "../../utils/projectData";

const ProjectPage = () => {
  const router = useRouter();
  const query = router.query.projectName;
  const project = projectData.find((val) => val.projectName == query);
  if (!project) return <div>No project to be found</div>;
  return (
    <Layout>
      <Project data={project} />
    </Layout>
  );
};

export default ProjectPage;
