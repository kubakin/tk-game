import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { useMe } from '../../data/query/user/me';

export const GamaSessionProgress = () => {
    const {me: {data: {me}}} = useMe()
    const items = [
       
        {
          title: 'Подтверждение',
          status: 'process',
        },
        {
          title: 'Pay',
          status: 'finish',
        },
      ]
      if (me.team.gameSession.game.cost) {
        items.push(
            {
                title: 'Оплата',
                status: 'process',
              },
        )
      }
    return <><Steps type={'inline'} progressDot={false} direction={'horizontal'} size={'small'}
    items={items as any}
  /></>   
}