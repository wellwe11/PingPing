import { Router } from 'express';
import { pingTarget } from '../../utils/index.ts';

const router = Router();

// Placeholder for now.
// TODO: real default getter for '/api/health'
router.get('/', async (req, res, next) => {
  try {
    const [
      frankfurt,
      london,
      helsinki,
      stockholm,
      warsaw,
      milan,
      madrid,
      amsterdam,
      paris,
    ] = await Promise.all([
      await pingTarget('frankfurt.linode.com'),
      await pingTarget('london.linode.com'),
      await pingTarget('hel.icmp.hetzner.com'),
      await pingTarget('sto-se-ping.vultr.com'),
      await pingTarget('waw-pl-ping.vultr.com'),
      await pingTarget('mil-it-ping.vultr.com'),
      await pingTarget('mad-es-ping.vultr.com'),
      await pingTarget('ams-nl-ping.vultr.com'),
      await pingTarget('par-fr-ping.vultr.com'),
    ]);

    return res.status(200).json({
      success: true,
      message: 'Backend up and running',
      placeholderData: [
        frankfurt,
        london,
        helsinki,
        stockholm,
        warsaw,
        milan,
        madrid,
        amsterdam,
        paris,
      ],
    });
  } catch (err) {
    next(err);
  }
});

export default router;
