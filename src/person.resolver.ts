import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Person } from './domain';

@Resolver('Person')
export class PersonResolver {
  @Query('getPerson')
  async getPerson(@Context() context, @Args('id') id: string) {
    return {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
    };
  }

  @Mutation('savePerson')
  async savePerson(@Args('person') person: Person) {
    console.log('Adding person');
  }
}
