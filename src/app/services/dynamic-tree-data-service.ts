import { DynamicFlatNode } from '../models/dynamic-flat-node';
import { CountryService } from './country-service';
import { Country } from '../models/country';

export class DynamicDatabase {

    aCoutries: Country[];
    aRegions: string[];
    aSubRegions: string[];
    constructor(private countryService: CountryService) {

    }

    getChildren(node: DynamicFlatNode): string[] | undefined {
        let result: string[];
        if (node.level == 0) {
            result = this.getSubRegionByRegion(node.item);
        } else if (node.level == 1) {
            result = this.getCountrBySubRegion(node.item);
        } else {

        }
        return result;
    }

    isExpandable(node: DynamicFlatNode): boolean {
        let result: boolean;
        if (node.level == 0) {
            result = true;
        } else if (node.level == 1) {
            result = false;
        } else {
            result = false;
        }
        return result;
    }

    getRegions(aCountries: Country[]): DynamicFlatNode[] {
        let regions: Set<string> = new Set<string>();
        aCountries.forEach(c => {
            if (c.region != "")
                regions.add(c.region);
        });
        if (regions.size > 0) {
            this.aRegions = Array.from(regions);
            return this.aRegions.map(name => new DynamicFlatNode(name, 0, true));
        }
    }

    getSubRegionByRegion(region: string): string[] {
        let subRegionsSet: Set<string> = new Set<string>();
        if (this.aRegions && this.aRegions.length > 0) {
            this.aCoutries.forEach(c => {
                if (c.region == region) {
                    subRegionsSet.add(c.subregion);
                }
            });
        }
        this.aSubRegions = Array.from(subRegionsSet);
        return this.aSubRegions;
    }

    getCountrBySubRegion(subRegion: String) {
        let countrySet: Set<string> = new Set<string>();
        if (this.aSubRegions && this.aSubRegions.length > 0) {
            this.aCoutries.forEach(c => {
                if (c.subregion == subRegion) {
                    countrySet.add(c.name);
                }
            });
        }
        return Array.from(countrySet);
    }
}