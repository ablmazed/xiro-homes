const data = {
  headerMenus: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Buy',
      href: '/buy',
    },
    {
      name: 'Sell',
      href: '/sell',
    },
    {
      name: 'Rend',
      href: '/rent',
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
  ],
  footerMenus: [
    {
      title: 'Join Us',
      links: [
        {
          name: 'Become an Agent',
          href: '/',
        },
        {
          name: 'Get Referrals',
          href: '/',
        },
        {
          name: 'Careers',
          href: '/',
        },
      ],
    },
    {
      title: 'Find Us',
      links: [
        {
          name: 'Contact Us',
          href: '/',
        },
        {
          name: 'Help Center',
          href: '/',
        },
        {
          name: 'Advertise',
          href: '/',
        },
        {
          name: 'Become a Lander Partner',
          href: '/',
        },
      ],
    },
    {
      title: 'Subsidiaries',
      links: [
        {
          name: 'Rent',
          href: '/faqs',
        },
        {
          name: 'ApartmentGuide',
          href: '/',
        },
        {
          name: 'Bay Equity Home Loans',
          href: '/',
        },
        {
          name: 'Title Forward',
          href: '/',
        },
      ],
    },
  ],

  homeCard: [
    {
      icon: '/redfinagent.png',
      title: 'Buy',
      description:
        'Redfin agents are among the most experienced in the industry and can help you win in today’s market.',
      btnTitle: ' Find An Agent',
      btnColor: 'bg-green-500 hover:bg-green-300 hover:text-white',
    },
    {
      icon: '/Sell.png',
      title: 'Sell',
      description:
        'We know how to price, market, and sell your home for top dollar. And we do it all for half the listing fee others often charge.',
      btnTitle: ' Learn More ',
      btnColor: 'bg-yellow-500 hover:bg-yellow-300 hover:text-white',
    },
    {
      icon: '/Rent.png',
      title: 'Rent',
      description:
        'Whether you’re searching for apartments, condos, or rental homes, we make it easy to find a place you’ll love.',
      btnTitle: 'Explore Rentals ',
      btnColor: 'bg-orange-500 hover:bg-orange-300 hover:text-white',
    },
  ],
}

export default data
