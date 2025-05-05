
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
              "/lovable-uploads/9d635749-fa93-414a-b4b5-6e7408b3305f.png",
              "/lovable-uploads/11e0f03a-0b77-45bc-a9af-2e9a78565ffa.png",
              "/lovable-uploads/09a7d156-bfdd-4ec5-a78c-524a5ff657c9.png",
              "/lovable-uploads/717a0912-84d5-4217-bd95-7bea5304f875.png"
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
              "/lovable-uploads/c9afff85-62f7-44d7-a636-cd92252a1fc5.png",
              "/lovable-uploads/8f9914f5-174d-48c4-ae3c-01f07b80b305.png",
              "/lovable-uploads/a1af207e-bc1f-4a9e-83a9-1c88a4c90c74.png",
              "/lovable-uploads/304620a2-5d2a-489a-a3f9-31a87ca92dde.png",
              "/lovable-uploads/8c1810bd-ece9-440d-93d9-9844bf6d880a.png",
              "/lovable-uploads/0fdeeb0c-3dd0-4cee-9f89-f0e261def8a7.png",
              "/lovable-uploads/462cb360-88dd-486c-a80b-f3427b41b964.png",
              "/lovable-uploads/6d298445-e0a3-4328-a8d6-f17ef1e09138.png",
              "/lovable-uploads/ef9b55c8-bba9-4cc3-8f95-6f834aa51d3d.png"
            ]}
            title="Interiores - Apartamento VF"
            category="Residencial"
          />
          
          <ProjectCard
            images={[
              "/lovable-uploads/562e2cf8-f522-4af5-bad9-96b3399d2fc4.png",
              "/lovable-uploads/e2b7258d-ef01-4282-b565-d519f304fea4.png",
              "/lovable-uploads/d310c12d-9b73-45d6-a51c-3e92aa9a5b23.png",
              "/lovable-uploads/fa4386ce-7e4b-4f49-805e-9084b4b8d06a.png"
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
