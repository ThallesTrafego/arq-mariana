
import { ProjectCard } from "@/components/ProjectCard";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-terracotta">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-adam mb-4">Projetos Selecionados</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Conheça alguns dos nossos trabalhos recentes e deixe-se inspirar para o seu próximo projeto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            images={[
              "/lovable-uploads/5f3f3c6c-b86b-414b-abed-727bd553297e.png",
              "/lovable-uploads/3cbba94b-e565-4dfb-9097-e441de05e141.png",
              "/lovable-uploads/cdadba65-b366-4b41-9b20-d5427a8826f8.png"
            ]}
            title="Área Gourmet Contemporânea"
            category="Residencial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/92de2557-ba5a-4aad-8de2-1f83e2e430ed.png",
              "/lovable-uploads/1f1b9e5b-d133-4bea-a14b-24cb53c79ce8.png",
              "/lovable-uploads/3dd26fc3-8dd8-4891-ae34-1e153e09c8fb.png",
              "/lovable-uploads/cf40909e-6522-4356-868e-e12df8440edd.png",
              "/lovable-uploads/5c34539e-aa4b-4e7c-a065-ba8d9160bc04.png",
              "/lovable-uploads/6ea6e5a2-9720-4acd-80d1-8881778723b5.png",
              "/lovable-uploads/6ea2bd1e-e515-4ff9-ae0d-aa3a5070b359.png",
              "/lovable-uploads/66487159-a19b-40ec-8d08-6c44d58b90f7.png",
              "/lovable-uploads/f9ee42df-6e96-46db-9292-d71ab60493c6.png",
              "/lovable-uploads/0853bd25-7238-49f6-aad4-050bdffe992b.png",
              "/lovable-uploads/c22be943-75bc-43b1-9bae-3b740eb90901.png",
              "/lovable-uploads/fd076955-513d-4c30-b371-71d340aa9fb6.png",
              "/lovable-uploads/7fd43bb7-695d-426f-bd3f-c951b68f4b39.png"
            ]}
            title="Interiores - MD"
            category="Residencial"
          />

          <ProjectCard
            images={[
              "/lovable-uploads/b6360c30-81cd-4c04-b38f-c72b045065e1.png",
              "/lovable-uploads/a92689f8-7f73-415b-af3a-634312cf655c.png",
              "/lovable-uploads/e2a29845-3a77-48b2-93ff-e7173d4ffd56.png",
              "/lovable-uploads/1ccdab5c-0189-47aa-9ea9-8ca7427a54b0.png"
            ]}
            title="Free Shop New York"
            category="Comercial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/c38d876b-ce96-4d10-bbae-c77c961a40cd.png",
              "/lovable-uploads/16658772-15a1-4852-b7fa-c6309d242b58.png",
              "/lovable-uploads/e6511fde-4c7b-4ab8-b6f6-5b052a5b352a.png",
              "/lovable-uploads/fd11c6c0-702b-4d52-a572-0ff688a28f71.png",
              "/lovable-uploads/56163cfd-9168-4a08-afb3-662171b5575e.png"
            ]}
            title="Quadra de Beach Tênis"
            category="Comercial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/7919844e-e089-486f-948d-6809d805e8f9.png",
              "/lovable-uploads/9c436e6a-c27e-4790-8bd8-4713c8d04943.png",
              "/lovable-uploads/c14faecc-fab3-46d1-a2c1-66a0b1cb473b.png",
              "/lovable-uploads/89f22a93-3161-4815-9059-05e0949732cd.png",
              "/lovable-uploads/2ba8083d-ed7f-4fc1-a4cb-8de5e30941b3.png",
              "/lovable-uploads/18659c49-6ddd-473e-80e8-615f7fe4f96c.png",
              "/lovable-uploads/9bf8ffd6-92d9-428b-9c74-a5f4331a2b6f.png",
              "/lovable-uploads/489acd97-5d7a-4643-987c-6af3677b2046.png",
              "/lovable-uploads/57b5cd46-a3dd-41ad-ac02-bcdd15446532.png",
              "/lovable-uploads/8056970e-e8ff-46e5-8dfe-0525d00e5bd3.png",
              "/lovable-uploads/09fc42f2-fa98-469b-82ca-c365417900cf.png",
              "/lovable-uploads/dd5b5d82-674a-4425-92b8-b2564aca7c04.png",
              "/lovable-uploads/a38dd064-dce2-48bf-8745-d4bb4765aeda.png",
              "/lovable-uploads/ec8771a4-3848-4bb6-9727-e2905a06bd3c.png"
            ]}
            title="Interiores - Apartamento VF"
            category="Residencial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/cefeeae3-ae79-497d-a909-2c53719da5da.png",
              "/lovable-uploads/02664abb-8e77-4fcb-acfd-1b5b2993a3ca.png",
              "/lovable-uploads/4aaa316b-5757-4d8e-b0fa-5006b31154c1.png",
              "/lovable-uploads/043646d5-48e3-4914-b96f-9eecd9334287.png"
            ]}
            title="Loja Aloma Zen"
            category="Comercial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/3d8e6849-1fbd-4fd9-a397-1a9dfe89f2a1.png",
              "/lovable-uploads/d321b2b0-b6ff-4006-ac8f-24e66a9f482a.png",
              "/lovable-uploads/f8c05891-dcec-41ac-9190-268bff31c38f.png",
              "/lovable-uploads/a1274ee9-6fdd-42ec-abab-c930cad73e6b.png",
              "/lovable-uploads/13585f8a-e3e6-4cfb-bc43-1181ca8f02d1.png"
            ]}
            title="Loja Teka"
            category="Comercial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/22a2a92d-fd77-471a-b369-360c974f7061.png",
              "/lovable-uploads/a57b74ee-2a4f-47a9-b7a3-879950bafcce.png",
              "/lovable-uploads/66a46e2d-1b9e-41ac-8624-8230a32873bf.png",
              "/lovable-uploads/545127d6-c2d8-4cb5-9e36-241f314ef06a.png"
            ]}
            title="Consultório Odontológico"
            category="Comercial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/271340b3-5a2b-4b54-b41e-51ab3acc0ab4.png",
              "/lovable-uploads/fde1d27b-0f60-41d6-9297-420c658ebc79.png",
              "/lovable-uploads/3389a78c-7e93-4003-8043-d4f2c968250f.png",
              "/lovable-uploads/0926f35e-9fcc-4621-8bd2-10c4f0da5288.png",
              "/lovable-uploads/ba5a3661-573d-488b-8c41-17480cd5d2fc.png",
              "/lovable-uploads/a5320c51-3ef8-4356-8878-00b0da068d32.png",
              "/lovable-uploads/b8a4623e-1e9c-47b9-bb78-f48a3f3a1d8f.png"
            ]}
            title="Apartamento RA"
            category="Residencial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/0cc272a6-2b94-4b38-a6f0-c8da7d8c3d2c.png",
              "/lovable-uploads/06a417a9-3664-4e2c-acd7-2cdcb1223000.png",
              "/lovable-uploads/eee68785-8801-4014-afa0-01f846fba3f6.png",
              "/lovable-uploads/aff69514-f638-4985-9b0f-11b390c325ca.png",
              "/lovable-uploads/fb27a8dd-0e7a-4156-976e-b8b21f3b2223.png",
              "/lovable-uploads/983ea70d-4928-4b77-9783-e8ba8605660c.png",
              "/lovable-uploads/105d7b09-6249-4bba-a3ec-0a1f7ef0014a.png",
              "/lovable-uploads/14f0cb06-465b-409d-b4c5-3ca5819f0515.png",
              "/lovable-uploads/49a7d0a3-dd41-4830-9064-10bd69e91944.png",
              "/lovable-uploads/d1b1e8ef-b74d-461c-8b3b-a2468bfbd030.png"
            ]}
            title="Projeto MF"
            category="Residencial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/10975b4b-0797-43cc-9a10-87121dbca50b.png",
              "/lovable-uploads/7cd73043-c613-4785-bc22-31d57b2d3b9b.png",
              "/lovable-uploads/89f74490-19d5-4d16-bd42-a089b3006e01.png",
              "/lovable-uploads/c468bfbb-7ebb-4bbf-bc01-e9b1dd6b197a.png",
              "/lovable-uploads/e01abe8e-1e9a-4e67-8776-97e76632b71a.png"
            ]}
            title="Consultório de terapia corporal"
            category="Comercial"
          />
        </div>
      </div>
    </section>
  );
};
