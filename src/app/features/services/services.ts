import { SystemOptionsService } from './system-options.service';
import { LeagueOfLegendsService } from './league-of-legends.service';
import { RainbowSixSiegeService } from './rainbow-six-siege.service';
import { BaseService } from './base.service';
import { DatabaseService } from './database.service';
import { ConfigService } from './config.service';
import { RandomService } from './random.service';
import { CounterStrikeGlobalOffensiveService } from './counter-strike-global-offensive.service';

export const Services = [
    RandomService,
    BaseService,
    DatabaseService,
    ConfigService,
    SystemOptionsService,
    RainbowSixSiegeService,
    LeagueOfLegendsService,
    CounterStrikeGlobalOffensiveService
]