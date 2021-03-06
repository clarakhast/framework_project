const program =
{

    fakeDB : [],

    init()
    {

        this.fakeDB.push({
            image: `/img/film.png`,
            title: `Acting for Film and Television`,
            credential:'Diploma',
            code:`10351`,
            lenght:4,
            start: `September`,
            location: `Lakeshore`,
            status: `Open`,
            description: `Humber’s Acting for Film and Television diploma program covers the full spectrum of training needed to succeed as a screen actor: acting, voice, movement, improvisation, screenwriting and script analysis. You’ll learn what it takes to express yourself through the art and craft of screen acting, gain on-camera confidence and learn how to shine at auditions. When you graduate, you’ll have a solid understanding of the craft and industry – its history, protocols and professional standards.`,
            skills: [`Acting to any medium`, `Script writing`, `Business management`],
            career: `In addition to traditional stage, film and television opportunities, graduates of the program qualify to work in a wide range of multimedia including webisodes, virtual reality and gaming videos, as well as voice-overs for cartoons, commercials, narration and audio dialogue replacement (dubbing).`,
        });
    
        this.fakeDB.push({
            image: `/img/animation.png`,
            title: `Animation - 3D`,
            credential:'Advanced Diploma',
            code:`AN311`,
            lenght:6,
            start: `September`,
            location: `North`,
            status: `Open`,
            description: `In Humber’s Animation 3D advanced diploma program, you will develop a well-rounded knowledge base and skillset that includes strong art, animation, modelling and visualization abilities. You will be prepared for the ever-expanding 3D art field with a thorough understanding of the latest 3D digital art technologies in a program developed with the input of industry advisors. Learn to work like the pros do — using the same 3D animation software and tools to render creative thoughts into compelling images and fully-realized design.`,
            skills: [`Animation`, `Modeling`, `Rigging`, `Lighting`, `Rendering`, `Compositing`],
            career: `Pour your creative ideas and your technical skills into a dynamic career in the fast-evolving field of 3D animation where your chances to progress are only as limited as your imagination. The rapid advancement in computer technology, combined with skyrocketing global demand for animated entertainment, cable and satellite TV, and the Internet, has led to a surge in career opportunities for those who have the expertise to tell effective stories and create compelling digital characters and worlds in 3D.`,
        });
    
        this. fakeDB.push({
            image: `/img/3d.png`,
            title: `3D Modelling and Visual Effects Production`,
            credential:'Certificate of Achievement',
            code:`11671`,
            lenght:2,
            start: `September`,
            location: `North`,
            status: `Open`,
            description: `Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the conceptual and the technical, as you learn to master visual techniques to bring ideas to life. You will develop skills in modelling, texturing and lighting, as well as in visual effects, compositing and digital cinematography. We employ a teaching process and course structure that requires content created in one course to be used to complete assignments in other courses. This “pipeline” process mirrors that of industry, allowing students to make a seamless transition into a real production environment.`,
            skills: [`Modelling`, `Texturing`, `Visual effects`, `Compositing`, `Digital cinematography`],
            career: `Pour your creative ideas and your technical skills into a dynamic career in the fast-evolving field of 3D animation where your chances to progress are only as limited as your imagination. The rapid advancement in computer technology, combined with skyrocketing global demand for animated entertainment, cable and satellite TV, and the Internet, has led to a surge in career opportunities for those who have the expertise to tell effective stories and create compelling digital characters and worlds in 3D.`,
        });
    },
    getallPrograms()
    {
        return this.fakeDB;
    }

}


program.init();
module.exports=program;