"use client"

const AboutTeam = () => {
  const team = [
    {
      name: "Zainab Bello",
      role: "Founder and President",
      image: "/IMG-20241101-WA0001 - Bello Zainab.jpg",
      bio: "",
    },
    {
      name: "Obase-Oyeni Etim Ayomobi",
      role: "Vice President",
      image: "/IMG_0239 - Obase Oyeni Ayomobi.jpg",
      bio: "",
    },
    {
      name: "Fuad Adegoke",
      role: "Chief Strategy Officer",
      image: "https://placehold.co/300x400",
      bio: "",
    },
    {
      name: "Yusuf Barika-Bodunrin",
      role: "Academic Team Lead",
      image: "/headshot - Barika-Bodunrin Yusuf.jpg",
      bio: "",
    },
    {
      name: "Marvellous Tijesunimi Otegbola",
      role: "Admin and Documentation Lead",
      image: "/IMG-20251031-WA0014 - Tijesu.jpg",
      bio: "",
    },
    {
      name: "Adetujoye Temiloluwa Oluwagbenga",
      role: "Design Team Lead",
      image: "https://placehold.co/300x400",
      bio: "",
    },
    {
      name: "Wiqoyah Akinwunmi",
      role: "Media and Publicity Lead",
      image: "/Snapchat-457251043 - Wiqoyah Akinwunmi.jpg",
      bio: "",
    },
    {
      name: "Ganiyu Muktar Olasupo",
      role: "Outreach and Enlightenment Team Lead",
      image: "muktar.jpg"
    },
    {
      name: "Olufayo Hephzibah Iyanuoluwa",
      role: "Outreach and Enlightenment Team Lead",
      image: "/IMG_2254 - Hephzibah Iyanu.jpg",
      bio: "",
    },
    {
      name: "Shodipo Oluwaseunfunmito Deborah",
      role: "Research and Impact Evaluation Lead",
      image: "/1758965671104 - Seun Shodipo.jpg",
      bio: "",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Dedicated professionals committed to transforming education and supporting student success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-96 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
