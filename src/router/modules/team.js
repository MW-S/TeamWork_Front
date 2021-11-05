/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const teamRouter = {
  path: '/team',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Team',
  meta: {
    title: 'Team',
    icon: 'chart'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/team/index'),
      name: 'TeamList',
      meta: { title: 'Team List', noCache: true }
    }
  ]
}

export default teamRouter
