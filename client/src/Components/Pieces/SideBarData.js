import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as RxIcons from 'react-icons/rx';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/therapist/dashboard',
        icon: <RxIcons.RxDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/medical-reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Questionaires',
        path: '/questionaires',
        icon: <RiIcons.RiQuestionAnswerLine />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <RiIcons.RiLogoutBoxLine />,
        cName: 'nav-text'
    }

];